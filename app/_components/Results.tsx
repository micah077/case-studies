import Image from 'next/image';
import { IData } from '../data';

const Results = ({ data }: { data: IData }) => {
    return (
        <div className='my-20 layout'>
            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-2">
                    <h1 className='text-[#0F0928] font-semibold text-[60px]'>Results Achieved</h1>
                    <p className='text-[#8A90A2] text-lg'>We achieved the following results:</p>
                </div>

                <div className="grid grid-cols-4 gap-5">
                    {data?.results?.map((item, index) => (
                        <div key={index} className="mt-5 col-span-1 flex flex-col gap-4">
                            <Image 
                                width={90} 
                                height={90} 
                                alt={`Result icon for ${item.title}`} 
                                src={item.img.src} 
                                className='object-contain' 
                            />
                            <p className='text-[#454F5C] font-bold'>{item.title}</p>
                            <p className='text-[#8A90A2] text-lg font-medium'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {data.resultVideo && (
                <div className="mt-40 p-1 border border-solid border-[#E7E7E7] rounded-md">
                    <video className='w-full' src={data.resultVideo} autoPlay loop muted />
                </div>
            )}
        </div>
    );
};

export default Results;
