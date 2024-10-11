import {auth} from "@/src/lib/auth";
import {LoginButton, LogoutButton} from "@/app/AuthButtons";


export default async function Home() {
  const session = await auth()
  return (
      <div>
    <h1>
      {session?.user ? "Authentificated" + session?.user.email : "Not Authentificatied" }
    </h1>
        <div>
          {session?.user ?  <LogoutButton /> : <LoginButton />}
        </div>

      </div>
  );
}
