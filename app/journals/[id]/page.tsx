import React from 'react';
import Image from 'next/image';
import rio from "@/app/images/rio.jpeg";
import Link from 'next/link';
import { ArchiveIcon, CalendarIcon, ClockIcon } from "lucide-react";

type Props = {}

export default function page({}: Props) {
  return (
    <div  className='border-2 border-red-400 w-full px-4 mt-4 min-h-screen overflow-auto relative text-foreground bg-background flex flex-col items-center'>
      <div className="w-full">
        <div className="w-full lg:mx-auto xl:mx-auto ">
          <div className="flex w-full mx-auto relative md:h-[35vh] h-[20vh] ">
              <Image className="w-full h-full object-cover" src={rio} alt='Mountain' />
          </div>
          {/** Post details header */}
          <div className="my-7 hidden border-2 py-2 justify-center text-foreground sm:flex sm:flex-row">
            {/** Author */}
            <div  className="mb-5 flex flex-row items-start justify-start pr-3.5 md:mb-0">
              <Image height={24} width={24} src={rio} alt='author_avatar'  className="flex h-[24px] w-[24px] border-2 border-white rounded-full object-cover shadow-sm"  priority placeholder="blur" />
              <div className="ml-2 flex flex-col">
                <span className="text-sm flex font-semibold ">
                  Junior Boy
                </span>
              </div>
            </div>
            {/** Date */}
            <div  className="flex space-x-2 border-gray-400 border-opacity-50 pl-0 pr-3.5 md:border-l md:pl-3.5">
              <p className='mt-0.5'>
                <span className="sr-only">Date</span>
                <CalendarIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </p>
              <span className="text-sm">20/11/2023 </span>
            </div>
            {/** Place */}
            <div className="flex space-x-2 border-l border-gray-400 border-opacity-50 pl-3.5 pr-3.5">
              <p className="mt-0.5">
                <span className="sr-only">Place</span>
                <ArchiveIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </p>
              <span className="text-sm">Mount Fuji</span>
            </div>
            {/** Reading Time */}
            <div className="flex space-x-2 border-l border-gray-400 border-opacity-50 pl-3.5">
              <p className="mt-0.5">
                <span className="sr-only">Minutes to read</span>
                <ClockIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </p>
              <span className="text-sm">4 mins</span>
            </div>
          </div>
          {/** Post Deatils Footer */}
          <div className="grid w-full grid-cols-3 justify-start gap-4 rounded-md">

          </div>
          {/** Content */}
          <div className="relative mx-auto w-full border-slate-500/50 py-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat accusantium exercitationem distinctio? A architecto expedita odit assumenda. Laboriosam quas velit dicta architecto quibusdam harum? Magnam minus dolorum nemo deserunt, illum sequi aspernatur ad sed at dignissimos sint temporibus, ex expedita. Nesciunt suscipit nulla maiores quasi perferendis consectetur. Tempora aperiam autem voluptates sit aspernatur possimus aut perferendis ad rerum culpa vel expedita, earum illo error assumenda? Delectus eveniet, cumque ab omnis maxime ipsum voluptatum placeat sapiente incidunt voluptate totam non voluptatem officia. Vero, quod? Id quasi rerum dolorum iure cum odio ipsam quia nostrum blanditiis cumque repellat fuga sapiente omnis voluptatem praesentium ullam, nobis eaque incidunt, ipsa asperiores maiores aliquid accusamus. Excepturi explicabo a odit dolore quasi corrupti laudantium iure sapiente atque qui. Esse exercitationem assumenda officiis sapiente, atque ut asperiores doloribus unde ducimus quaerat doloremque omnis soluta fuga nulla qui voluptatem voluptatum debitis possimus? Officia quidem laudantium minus consequuntur velit dolore! Praesentium similique nesciunt autem nostrum recusandae placeat odio. Molestiae consequuntur quisquam, deleniti quo dolores, beatae similique aspernatur ullam voluptatem odio ab tempora veritatis alias distinctio voluptatibus. Autem labore commodi rem, modi consectetur, illo culpa temporibus vero quidem, harum ad ea doloremque exercitationem quas eius cum sint aliquam! Ipsum accusantium possimus ducimus consequatur voluptatem eveniet nisi. Possimus, porro omnis. Laudantium, voluptas nam illo excepturi voluptatum voluptate ipsa molestiae officiis ex nisi totam quae harum, repellat repellendus accusamus voluptates quaerat non eos officia sit, consequuntur eius explicabo unde ea? Repellendus eius nostrum inventore ut veniam. Aliquid aliquam, deleniti a asperiores amet modi suscipit totam aut facilis laboriosam enim. Harum aperiam soluta dicta officia optio ipsa voluptatem perspiciatis! In sapiente animi cum consequatur voluptas at exercitationem maiores distinctio alias omnis laboriosam porro dignissimos officia optio, mollitia perspiciatis accusamus, veritatis minus. Voluptas, amet pariatur! Quam totam ipsum, aut ea a fuga ad cupiditate expedita quos aperiam, rerum rem alias facere tempore suscipit nemo odio incidunt velit esse quo sit ratione numquam. Necessitatibus, perferendis asperiores iste dolore molestiae accusantium corrupti, laudantium itaque saepe fuga magni iusto blanditiis porro. Laboriosam temporibus ducimus, aut molestias mollitia, iste tenetur vel voluptatem possimus nisi quae, officiis voluptas porro? Nulla sunt, officiis voluptas voluptates tempore cumque commodi veniam consequatur? Sint harum quam optio quaerat! Officia at error consequatur quasi nobis consequuntur dignissimos quas quisquam, sunt atque harum dolores repudiandae placeat. Iste, totam eligendi laudantium nihil voluptatibus fugiat, vitae fugit eum architecto cumque beatae qui voluptatum incidunt atque cum cupiditate minima, voluptas provident modi corrupti itaque blanditiis quasi recusandae. Quas reprehenderit ex, officiis placeat debitis sapiente voluptates labore quia, veniam ad, culpa non maxime inventore sunt iusto harum sed laudantium neque mollitia repudiandae numquam blanditiis nulla? Velit aspernatur nemo deleniti tenetur laboriosam suscipit necessitatibus pariatur, recusandae, sint sed officiis nobis laudantium reprehenderit nesciunt soluta incidunt, veniam ad quos quam! Adipisci, voluptatem molestias ex quisquam enim perferendis? Accusantium, necessitatibus debitis. Asperiores assumenda dolorum earum a temporibus est quam impedit quibusdam molestiae doloremque! Ut ipsa fuga enim eum accusamus id ipsum amet expedita natus totam praesentium obcaecati odit quae veniam, nam laudantium itaque culpa. Adipisci perspiciatis nemo consequuntur voluptates velit doloribus autem laboriosam illo, eum deserunt similique officia qui neque natus, impedit perferendis, dolores tempora nobis nisi voluptate voluptatum optio magnam eius. Ad corrupti, nesciunt delectus iusto, eius dignissimos veniam dicta aperiam itaque magnam sunt, dolor facilis animi numquam suscipit necessitatibus vitae ut aliquam rem provident hic quas fugiat? Aliquam odio esse, dolores hic quisquam laborum delectus. Odio cumque repellat facilis quaerat a hic quisquam fugiat, veniam ad. Maiores maxime quo repellat quidem recusandae sed eius dicta nostrum dolorem! Illo, voluptas, qui minus veniam dolore quos molestiae vel reprehenderit aspernatur reiciendis modi! Minus illum perferendis corrupti consequatur quos quaerat dolore alias aliquid. Qui voluptate nulla cupiditate omnis illo ipsa enim quibusdam quidem aspernatur quis? Error, praesentium nostrum? Non iste architecto quia alias necessitatibus eligendi cum, in, ut repellat sequi qui. Minima adipisci harum, suscipit nisi obcaecati cupiditate dolore architecto animi sapiente similique inventore, sit voluptas assumenda, rem eveniet facilis amet aliquid doloremque sint distinctio deserunt. Voluptatibus eius error possimus accusantium quo dicta soluta officiis quisquam nesciunt voluptas adipisci, delectus incidunt nulla ea id laboriosam amet voluptatem illum autem obcaecati illo neque aliquid architecto in? Expedita iste dolores provident tempora nostrum atque sed in, deserunt ad dolor voluptatum nesciunt corrupti officia laudantium nam debitis exercitationem mollitia quae ut accusamus, non quod inventore delectus? Quasi fugiat minus dolor maiores, neque ut sint at ab nobis illum voluptate ducimus provident, facilis alias ex magnam temporibus voluptatum sunt. Ex nostrum id expedita totam. Atque, eaque a repellendus voluptatem dignissimos alias quia distinctio tenetur laborum optio, corrupti provident. Itaque esse voluptatum sint laborum. A totam quae ex doloribus consequuntur error eius sed eum libero dicta expedita, atque sit commodi delectus optio suscipit ipsam aliquam voluptate porro? Asperiores deleniti id voluptas, illum porro explicabo nisi quasi ab esse a, qui quis sapiente eum sunt doloribus deserunt totam ad vero iure nesciunt eligendi minus. Rerum aliquam consectetur voluptatum eligendi, odio alias perspiciatis atque ipsum qui culpa nulla officiis similique ratione unde ipsa magni minus hic modi! Id, provident libero natus sint magnam quidem unde a ratione et blanditiis consequatur vel minus adipisci molestias explicabo. Libero expedita similique vel dicta natus, quam voluptatum! Nemo, laudantium quos, quas rerum id quae fugiat inventore provident error ratione maxime, ipsam aliquid optio? Inventore vel beatae itaque soluta repudiandae eos incidunt sunt, quibusdam explicabo, suscipit dolorem ducimus nesciunt eligendi minima iste officiis corporis. Accusamus suscipit culpa beatae impedit earum illo dolor nesciunt corrupti non distinctio neque quibusdam vero sed corporis blanditiis, eos expedita. Repudiandae officiis vel, expedita optio dolorum impedit. Dolor reprehenderit perferendis iure harum minima magni deleniti laudantium quam, odit earum facere quasi veniam vel exercitationem omnis, quidem eveniet quia inventore nulla cum, nam autem quo. Quo, iusto saepe! At cumque vero vel eveniet voluptate reprehenderit molestias. Eos saepe in maiores iusto ut repellendus voluptatum dolore omnis, deserunt illum, velit cum exercitationem numquam aspernatur sint dolorem odio suscipit obcaecati autem non consequuntur reiciendis provident alias. Rerum delectus ullam, mollitia voluptates quas omnis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}