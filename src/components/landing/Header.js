import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Your story starts with us.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                This is a simple example of a Landing Page you
                                can build using Material Tailwind. It features
                                multiple components based on the Tailwind CSS
                                and Material Design by Google.
                            </LeadText>
                            <Link to={'/login'}><button className="bg-yellow-500 inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-yellow border-yellow active:bg-yellow active:border-yellow text-sm px-6 py-3 shadow-md hover:shadow-lg rounded-lg ">
                           <a href='/login'>Gangez de l'argent en Freelance</a></button></Link>
                           <Link to={'/login'}><button className="bg-yellow-500 inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-yellow border-yellow active:bg-yellow active:border-yellow text-sm px-6 py-3 shadow-md hover:shadow-lg rounded-lg ">
                           <a href='client/login'>Embauchez un Freelance</a></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
