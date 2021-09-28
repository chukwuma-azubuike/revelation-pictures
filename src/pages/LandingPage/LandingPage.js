import Button from "../../components/Button";
import Circle from "../../components/Circle";
import socialIcons from "../../data/social";

function LandingPage() {

    const social = socialIcons();

    return (
        <div className='text-center grid text-white bg-black h-screen'>
            <header className='text-2xl pt-8'>REVELATION PICTURES</header>
            <div>
                <h1 className='text-8xl lg:px-64 md:px-44 py-1 leading-tight font-semibold' >
                    WEBSITE COMING SOON
                </h1>
                <h5 className='py-2 text-2xl' >NEARLY READY!</h5>
                <div className='bg-gray-100 w-96 m-auto h-5 my-6' >
                    <div className='progress-bar w-56 bg-blue-400 h-5' />
                    <div className='relative flex justify-between top-2 progress-label'>
                        <p>0%</p>
                        <p>100%</p>
                    </div>
                </div>
                <Button text='Notify Me!' />
                <div className='flex justify-between w-128 m-auto mt-12' >
                    {social.map((item) => <Circle info={item.icon} />)}
                </div>
            </div>
            <footer className='py-4 font-light text-sm' >
                REVELATION PICTURES © 2021. Proudly created Chukwuma Azubuike
            </footer>
        </div>
    )
}

export default LandingPage;