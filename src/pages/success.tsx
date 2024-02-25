import { AppContext } from "@/ContextProvider";
import { Div, Wrapper } from "@/styles/globals";
import { Title } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";


export default function Success() {

  const {paid} = useContext(AppContext);
  const router = useRouter();

  useEffect(() => { 

    setTimeout(() => {      
      router.push('/');
    }, 3000);
  }, []);

  if (paid === false) {
    return (<Div><Wrapper><h1>Payment failed</h1></Wrapper></Div>);
  }

  return (
    <>
      <Div>
        <Wrapper>
          <h2>Success</h2>
          <p>You're being redirected...</p>
        </Wrapper>
      </Div>
    </>
  );
}
