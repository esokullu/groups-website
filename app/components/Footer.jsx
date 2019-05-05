import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.rand = this.rand.bind(this);
        this.randomQuote = this.randomQuote.bind(this);
    }
    rand(min, max) {
        var min = min || 0,
            max = max || Number.MAX_SAFE_INTEGER;
      
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomQuote() {
        let ls = [
            "Si la jeunesse savait, si la vieillesse pouvait - Henri Estienne",
            "Truth happens - Red Hat",
            "Stay foolish, stay hungry - Steve Jobs",
            "What's very dangerous is not to evolve - Jeff Bezos",
            "Why join the navy if you can be a pirate? - Steve Jobs",
            "A Ship is always safe at the shore - but that is NOT what it is built for - Albert Einstein",
            "Do not go where the path may lead, go instead where there is no path and leave a trail - Ralph Waldo Emerson",
            "A pessimist sees the difficulty in every opportunity, an optimist sees the opportunity in every difficulty - Winston Churchill",
            "What doesn't kill you makes you stronger - anonymous",
            "Don't mistake kindness for weakness. - Swordfish",
            "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat. - Theodore Roosevelt",
            "None are so hopelessly enslaved as those who falsely believe they are free. - Goethe",
            "If I do not burn. If you do not burn. If we do not burn. How will darkness come to light? - Nazim Hikmet",
            "For now you must feel this pain, and endure the sadness, but so loved this world that you can say, 'I have lived'. - Nazim Hikmet",
            "I've noticed three kinds of people in this world: those who make things happen, those who watch what happens, and those who wonder what happened - Socrates",
            "Success is getting what you want, happiness is liking what you get - H. Jackson Brown, Jr.",
            "Love is when the other person's happiness is more important than your own. - H. Jackson Brown, Jr.",
            "Success is where preparation and opportunity meet. - Bobby Unser",
            "The leader has two jobs: (1) to be the lead learner, and (2) to develop other leaders - Noel Tichy",
            "I have not failed. I've just found 10,000 ways that won't work - Thomas Edison",
            "A diamond is merely a lump of coal that did well under pressure - Henry Kissinger",
            "What we do in life echoes in eternity - Maximus",
            "A lot of times, people don't know what they want until you show it to them - Steve Jobs",
            "A coward is incapable of exhibiting love; it is the prerogative of the brave - Mahatma Gandhi",
            "The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts - Bertrand Russell",
            "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special - Stephen Hawking",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Build courage when courage seems to fail; regain faith when there seems to be little cause for faith; create hope when hope becomes forlorn - General Douglas MacArthur",
            "I never learned how to tune a harp, or play upon a lute; but I know how to raise a small and inconsiderable city to glory and greatness - Themistocles",
            "There's no sense in being precise when you don't even know what you're talking about - John Von Neumann",
            "A customer is the most important visitor on our premises, he is not dependent on us. We are dependent on him. He is not an interruption in our work. He is the purpose of it. He is not an outsider in our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so. - Mahatma Gandhi",
            "Success is going from failure to failure without a loss of enthusiasm - Winston Churchill",
            "Success is dangerous because often you don’t understand why you succeeded. - Mark Pincus",
            "You can recognize a pioneer by the arrows in his back - Beverly Rubik",
            "If you want to innovate, you have to be willing to be misunderstood for long periods of time - Jeff Bezos",
            "I am thankful to those who said NO to me, it is because of them I did it myself -Albert Einstein",
            "If friendship is your weakest point, then you are the strongest person in the old - Abraham Lincoln",
            "It always seems impossible until it's done - Nelson Mandela",
            "I am fundamentally an optimist. Whether that comes from nature or nurture, I cannot say. Part of being optimistic is keeping one’s head pointed toward the sun, one’s feet moving forward. There were many dark moments when my faith in humanity was sorely tested, but I would not and could not give myself up to despair. That way lays defeat and death. - Nelson Mandela",
            "We believe that technology is at its very best; at its most empowering when it disappears. - Jonathan Ive",
            "It’s irreverence, foolish confidence, naivety combined with persistence, open mindedness that created great startups. - Vinod Khosla",
            "Only the paranoid survive. - Andrew Grove",
            "In the long run, the power of the people is much stronger than the people in power. - Bono",
            "Strength does not come from physical capacity it comes from an indomitable will - Gandhi",
            "Quiet people Have the loudest mentality. - Kurt Cobain",
            "There is no such thing as work-life balance. Everything worth fighting for unbalances your life. - Alain de Botton",
            "Competition is over-rated. It enables you to get better at something narrow, but you might miss the big picture. - Peter Thiel",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
            "Good judgment comes from experience; experience comes from bad judgment. - Mulla Nasruddin",
            "In the realm of ideas, everything depend on enthusiasm... In the real world, all rests on perseverance. - Johann Wolfgang van Goethe",
            "Be like the flower that gives its fragrance to even the hand that crushes it. - Imam Ali",
            "A hero is someone who has given his or her life to something bigger than oneself. - Joseph Campbell",
            "The arc of the moral universe is long but it bends towards justice - Martin Luther King Jr.",
            "It's what you do in the dark that puts you in the light -- Under Armour",
            "You have power over your mind -- not outside events. Realize this, and you will find strength. -- Marcus Aurelius",
            "And remember, where you have a concentration of power in a few hands, all too frequently men with the mentality of gangsters get control. History has proven that. All power corrupts; absolute power corrupts absolutely. -- Sir John Dalberg-Acton",
            "Ideally never absorb information without predicting it first. Then you can update both 1) your knowledge but also 2) your generative model. -- Andrej Karpathy"
        ];
        let this_quote = ls[this.rand(0, ls.length-1)];
        console.log(this_quote);
        return this_quote;

    }
    render() {
        let year = new Date().getFullYear();
        let random_quote = this.randomQuote();
        return (
            <footer>
                <img className="clouds" src="/app/images/illustrations/clouds.png" />
                <div className="container">
                    <div className="message">
                        {random_quote}{/* <em className="love icon"></em> */}
                    </div>
                    <div className="links">
                        <span className="credit">
                            &copy; {year} <a href="javascript:void(0)">Research in Social Graph Corporation</a>
                        </span>
                        &middot; <Link className="link" to="/careers">Careers</Link>
                        &middot; <Link className="link" to="/legal">Legal</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
