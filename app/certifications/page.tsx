import { Button } from "@/components/ui/button";

const certs = [
  [
    "Associate of Arts",
    "University of Maryland Global Campus",
    "2020",
    "associatedegree.png",
  ],
  [
    "Certified Personal Trainer",
    "National Personal Training Institute of California",
    "2022",
    "cpt.png",
  ],
  ["Title IX", "NFHS", "2022", "title-ix.png"],
  ["Red Cross EMR", "American Red Cross", "2023", "red-cross-emr.png"],
];

export default function Certifications() {
  return (
    <div className="h-full overflow-y-scroll">
      <section className="sticky top-0 z-40 bg-violet-100 shadow py-4">
        <div className="text-center text-3xl mb-4">
          Degrees and Certificates
        </div>
        <div className="flex justify-center">
          <Button className="bg-violet-400 hover:bg-violet-500 w-80">
            Download All
          </Button>
        </div>
      </section>

      <section className="my-4">
        {certs.map((c) => (
          <div>
            <div className="flex mx-4 space-x-4">
              <div className="w-2/3">
                <div className="font-bold text-xl">{c[0]}</div>
                <div className="font-thin">{c[1]}</div>
                <div>{c[2]}</div>
              </div>
              <div className="w-1/3 flex flex-col justify-center">
                <img src={`/images/${c[3]}`} />
              </div>
            </div>
            <div className="mx-24 border my-4"></div>
          </div>
        ))}
      </section>
    </div>
  );
}
