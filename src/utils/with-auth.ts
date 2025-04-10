import { NextRequest } from "next/server";


export function withAuth(handler: Handler): Handler {
  return async (req, context) => {
    const token = req.headers.get("Authorization");
    if (token) {
        const [bearer, authToken] = token.split(' ');
        if (bearer !== 'Bearer' || !authToken) {
            return new Response(JSON.stringify({ details: "Invalid token format" }), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            });
        }else{
            context.authToken = authToken;
        }
    }

    // If authenticated, call the original handler
    return handler(req, context);
  };
}

export function withOptionalAuth(handler: Handler): Handler {
  return async (req, context) => {
    const token = req.headers.get("Authorization");
    if (token) {
        const [_, authToken] = token.split(' ');
        if (authToken) {
            context.authToken = authToken;
        }
    }

    // If authenticated, call the original handler
    return handler(req, context);
  };
}
