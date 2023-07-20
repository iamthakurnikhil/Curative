import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className=" h-min mb-8  w-screen">
        <div className=" h-40 flex items-center justify-center">
          <div className="font-bold md:mt-12 items-center justify-center flex text-amber-500 text-3xl mb-8">
            About us
            <hr className="mt-9 absolute border-2 rounded-lg border-cyan-900 w-[125px] flex text-center" />
          </div>
        </div>

        <div className="flex flex-row">
          <div className=" md:grid grid-cols-5 gap-4 w-screen">
            <div className="hidden md:block mt-10 col-span-2 overflow-hidden ">
              <Image
                src="/doctors.jpg"
                width={700}
                height={800}
                layout="intrinsic"
                className="object-contain"
              />
            </div>

            <div className="md:col-span-3 text-center mb-8  md:mx-5 px-10 text-xl rounded-xl">
              At Curative, we see a wide variety of children with a Range of
              medical, developmental and learning Concerns. Through history and
              parental report, we draw a profile of the child on the home and
              the school Fronts, sometimes modified further by a visit to the
              school.
              <br/>
               The Clinical sessions allow us to have a good idea of the
              child's abilities and disabilities. We also provide the liaison
              between family and school as well as between family and
              intervention agencies. We provide children's therapy in a fun,
              family friendly professional environment. Serving children from
              ages 1 month to 18 years, Curative therapists are certified in
              Sensory Integration, ABA, Jolly Phonics © UK and Handwriting
              without Tears © curriculum. All of our therapists regularly attend
              continuing education courses and seminars to keep up with the
              Latest techniques.
              <br/>
               We at Curative believe that a child's therapy
              program is a collaborative effort initiated by the therapist and
              carried out beyond sessions, throughout the child's daily life.
              Each therapist works closely and in conjunction with those closest
              to the kids (e.g. Parents, teachers, caregivers, schools etc.) to
              achieve the child's highest potential. Children excel through
              complex, interdisciplinary therapies that feel more like play than
              work. Children coming to our centre laugh play and succeed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
