"use client";
import { Form } from "components";
import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const clientId =
  "442349327010-tlbuva7k5v1p7fhirgrcn45a771ducd7.apps.googleusercontent.com";

export default function Index({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res: any) => {
    console.log("success:", res);
  };
  const onFailure = (err: any) => {
    console.log("failed:", err);
  };

  return (
    <div>
      <h1>Pagina 1</h1>
      <Link className="link" href="/page2">
        Ir a pagina 2
      </Link>
      <Form></Form>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
