import Cookie from "js-cookie";
import BaseLayout from "../components/layouts/base.layout";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/dashboard";

export default function HomePage() {
  return (
    <BaseLayout title="Home">
      <>{Cookie.get("access_token") ? <Dashboard /> : <LandingPage />}</>
    </BaseLayout>
  );
}
