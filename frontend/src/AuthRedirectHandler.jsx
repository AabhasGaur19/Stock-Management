import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase-client"; 

const AuthRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session?.session) {
        navigate("/dashboard"); 
      }
    };

    checkUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          navigate("/dashboard");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  return null;
};

export default AuthRedirectHandler;
