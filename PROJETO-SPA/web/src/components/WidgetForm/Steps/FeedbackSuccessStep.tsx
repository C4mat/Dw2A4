import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;

}

export function FeedbackSuccessStep({ onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
    return (

        <>
            <header>

                <CloseButton />

            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">

                <span className="text-xl mt-2"> Agradecemos o feedback! </span>

                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-blue-700 rounded-md border-transparent text-sm leading-6 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-blue-800  disabled:opacity-50 disabled:hover:bg-blue-700">
                    Quero enviar outro

                </button>




            </div>


        </>
    )

}
