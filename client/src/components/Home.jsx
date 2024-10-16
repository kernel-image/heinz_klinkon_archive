import ImageContainer from './ImageContainer'
import WelcomeMessage from './WelcomeMessage'


function Home() {
    //console.log("rendering default content");
    const homeimg = "HKLW0096"
    return (
        <> 
        <ImageContainer id = {homeimg} />
        <WelcomeMessage message = {`HEINZ KLINKON (1941-2008) was an artist, designer, and educator.\nThis website attempts to catalogue his work for interested parties to browse.`}/>
        </>
    )
}
export default Home