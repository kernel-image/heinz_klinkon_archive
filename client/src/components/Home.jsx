import ImageContainer from './ImageContainer'
import WelcomeMessage from './WelcomeMessage'


function Home() {
    //console.log("rendering default content");
    const homeimg = "hk0120"
    return (
        <> 
        <ImageContainer id = {homeimg} />
        <WelcomeMessage message = {`HEINZ KLINKON (1941-2008) was an artist, designer, and educator.\nThis website attempts to catalogue his work for interested parties to browse.\nAdditional images and information will be added on an ongoing basis.\n<a href="mailto:info@kernel-image.net">Email</a> with inquiries.`}/>
        </>
    )
}
export default Home