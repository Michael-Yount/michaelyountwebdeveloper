import mypic from '../MYlogo.png'

function Biography() {
    console.log('biography');
    return (
        <div className="container">
            <h1 className="name-title">Bio</h1>
            <div className="row">
                <div className="col">
                    <img src={mypic} className="img-fluid" alt="..."/>
                </div>
                <div className='col'>
                    <p className='bio'>
                        I have always been enthusiastic about computers and coding.
                        <br/> I remember my first computers in the 80's, the VZ2000 (1983) and the Tandy 1000 (1989)!
                        <br/> Coding in basic and learning code from computing magazines, I was always fascinated with computers.
                        <br/> 
                        <br/> Creating art in many forms since as far back as I can remember.
                        <br/> I trained in art school and studied portraiture in my studio.
                        <br/> Digital art is my combination of art and my love of computer programming.
                        <br/> This has lead me to web and app development, where I can focus on user experience and make the functionality seamless.

                        <br/>
                        <br/> Learning is a lifelong endevour, when you realize that you can learn eveything then you go for it.
                        <br/> 
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Biography;
