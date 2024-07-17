import Logo from "../reusableComponents/Logo";


const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="flex justify-center  items-center">
                    
                    <img src="https://i.postimg.cc/k4q8dSTY/X7-Zcr8yp7-B6issio-Ep.webp" alt="" />
                    <div className="animate-pulse">
                    <Logo/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;