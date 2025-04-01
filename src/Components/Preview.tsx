import { CiLocationOn } from "react-icons/ci";
import { RiLinkM } from "react-icons/ri";
import banner from '../assets/banner.jpeg'
import profilePic from '../assets/profile-picture.jpg'



function Preview() {
    return (
        <div className='bg-black text-white py-10 pt-1 px-0 rounded-md'>
            <div>
              <img src={banner}/>
            </div>
            <div className='w-40 h-40 rounded-full overflow-hidden border-2 border-black ml-4 -mt-13'>
                <img src={profilePic}/>
            </div>
            <div>
                <div className='text-left text-2xl'>Poneta</div>
                <div className='text-left'>@ponetaaudit</div>
                <div className='text-left mt-2'>developer | prev. @RareSkills.io</div>
                <div className='flex gap-4 mt-6'>
                    <div className='flex'>
                        <CiLocationOn className='mt-1 mr-1'/>
                        <span>Austin, TX</span>
                    </div>
                    <div className='flex'>
                        <RiLinkM className='mt-1 mr-1'/>
                        <div>sitelink.com</div>
                    </div>
                    <div>Joined September 2014</div>
                </div>
                <div className='flex gap-4'>
                    <div className='font-bold'>120 <span className='font-normal'>following</span></div>
                    <div className='font-bold'>27<span className='ml-1 font-normal'>followers</span></div>
                </div>
            </div>

            <div className='flex justify-between mt-5 mx-auto'>
                <div className='border-b-3 border-blue-400 py-0.5 w-1/5 text-center'>Posts</div>
                <div className='w-1/5'>Highlights</div>
                <div className='w-1/5'>Articles</div>
                <div className='w-1/5'>Media</div>
            </div>
        </div>
    );
}

export default Preview;