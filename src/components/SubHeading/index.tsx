
function SubHeading() {
    return (
        <>
            <div className="p-7 bg-black">
                <div className="contanier flex flex-col  items-center">
                    <div className="flex flex-col justify-center gap-7 h-[60vh]">
                        <div className="flex flex-col  gap-5 w-fit">
                            <p className="relative z-30 text-[2rem] font-poppins font-bold text-white  ">Bizimlə əlaqə</p>
                            <p className="relative z-30 font-semibold w-[27vw] text-[1.3rem] text-white ">Console Game komandasıyla birlikdə işləmək istəyirsiniz? </p>
                        </div>

                        <article className="flex w-[80vw] h-[25vh]  justify-between items-center rounded-[15px] bg-stone">
                            <div className=" flex flex-col gap-3 ml-[30px] font-poppins text-white">
                                <p className=" text-[2rem] font-semibold">Şərh göndərmək</p>
                                <p className=" font-medium w-[70%]">
                                Fikir və maraqlarınızı bizimlə bölüşün
                                </p>
                            </div>
                            <form
                                action="https://formspree.io/f/mqaznvlk"
                                method="POST" 
                                className=" flex items-center h-[10vh] w-fit px-7"
                                >
                                <input type="email" name="email" className="w-[30vw] py-4 px-2 border rounded-[10px] bg-white text-[1.4rem]" placeholder="Enter your email" />
                                <button type="submit" className="bg-orange py-3 px-5 text-white rounded-[10px] absolute right-[12.5%]">Continue</button>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubHeading
