
import Header from "./header.component";
import Footer from "./footer.component";
import Main from "./main.component";
import Services from "./services.component";
import GetInTouch from "./getintouch.component";

function Home() {
  return (
    
    <div >
        {/* <Head>
                <title>boxbay</title>

            </Head> */}

           
            <Main/>
            <Services/>
            <GetInTouch/>

            <Footer/>    </div>
  );
}

export default Home;


