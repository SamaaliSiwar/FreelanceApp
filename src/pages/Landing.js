import Header from 'components/landing/Header';

import ResponsiveAppBar from 'components/ResponsiveAppBar';


export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <ResponsiveAppBar />
            </div>
            <main>
                <Header />

                
            </main>
         
        </>
    );
}
