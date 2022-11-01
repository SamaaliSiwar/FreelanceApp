import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
               
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Founder and CEO"
                    />
                </div>
            </div>
        </section>
    );
}
