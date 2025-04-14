import AuthRepository from "@/src/repository/auth";

const authRepository = new AuthRepository();

export function withAuth(handler: Handler): Handler | undefined {
  return async (req, res) => {
    const token = req.headers.authorization;
    try {
      if (token) {
        const [bearer, authToken] = token?.split(" ");
        if (bearer !== "Bearer" || !authToken) {
          throw new Error("Unauthorized");
        } else {
          req.userCredential = authRepository.verifyToken(authToken);
        }
      } else {
        throw new Error("Unauthorized");
      }
    } catch (err) {
      return res.status(401).json({ details: "Invalid token format" });
    }

    // If authenticated, call the original handler
    return handler(req, res);
  };
}

export function withOptionalAuth(handler: Handler): Handler {
  return async (req, res) => {
    const token = req.headers.authorization;

    if (token) {
      const [bearer, authToken] = token?.split(" ");
      if (bearer !== "Bearer" || !authToken) {
        req.userCredential = authRepository.verifyToken(authToken);
      }
    }
    // If authenticated, call the original handler
    return handler(req, res);
  };
}
