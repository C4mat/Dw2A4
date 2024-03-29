import { Navbar } from "./Navbar"
import { SubButton } from "./SubButton"

export const Comment = () => {
    return (
        <>
            <Navbar />


            <div className="bg-blue-200 dark:bg-zinc-500 p-8 shadow-sm rounded-xl mx-10 ">

                <div className="pt-6  text-center space-y-4">
                    <div className="text-2xl font-bold">
                        Parabéns você concluiu o curso !!!!

                    </div>
                    <iframe className=" aspect-video place-items-center w-1/2 container mx-auto px-4  space-y-4  " src="https://www.youtube.com/embed/j5FZTcqkqT4?controls=1oop=1&amp;///start=2" ></iframe>

                </div>
            </div>
            <SubButton />
        </>
    )



}