import ImageContainer from './ImageContainer'
import WelcomeMessage from './WelcomeMessage'


function Home() {
    //console.log("rendering default content");
    const homeimg = "hk0120"
    return (
        <> 
        <ImageContainer id = {homeimg} />
        <WelcomeMessage message = {`HEINZ KLINKON (1941-2008) was an artist, designer, and educator.  This website attempts to catalogue his work for interested parties to browse. Titles in parenthesis are provisional.  Additional images and information will be added on an ongoing basis.\n`}/>
        </>
    )
}
export default Home