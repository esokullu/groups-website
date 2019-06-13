import React from 'react';
import { Link } from 'react-router-dom';

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
            {
                quote: 'Si la jeunesse savait, si la vieillesse pouvait',
                author: 'Henri Estienne'
            },
            { quote: 'Truth happens', author: 'anonymous' },
            { quote: 'Stay foolish, stay hungry', author: 'Steve Jobs' },
            {
                quote: "What's very dangerous is not to evolve",
                author: 'Jeff Bezos'
            },
            {
                quote: 'Why join the navy if you can be a pirate?',
                author: 'Steve Jobs'
            },
            {
                quote:
                    'A Ship is always safe at the shore - but that is NOT what it is built for',
                author: 'Albert Einstein'
            },
            {
                quote:
                    'Do not go where the path may lead, go instead where there is no path and leave a trail',
                author: 'Ralph Waldo Emerson'
            },
            {
                quote:
                    'A pessimist sees the difficulty in every opportunity, an optimist sees the opportunity in every difficulty',
                author: 'Winston Churchill'
            },
            {
                quote: "What doesn't kill you makes you stronger",
                author: 'anonymous'
            },
            {
                quote: "Don't mistake kindness for weakness",
                author: 'Swordfish'
            },
            {
                quote:
                    'It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat',
                author: 'Theodore Roosevelt'
            },
            {
                quote:
                    'None are so hopelessly enslaved as those who falsely believe they are free',
                author: 'Goethe'
            },
            {
                quote:
                    'If I do not burn. If you do not burn. If we do not burn. How will darkness come to light?',
                author: 'Nazim Hikmet'
            },
            {
                quote:
                    "For now you must feel this pain, and endure the sadness, but so loved this world that you can say, 'I have lived'",
                author: 'Nazim Hikmet'
            },
            {
                quote:
                    "I've noticed three kinds of people in this world: those who make things happen, those who watch what happens, and those who wonder what happened",
                author: 'Socrates'
            },
            {
                quote:
                    'Success is getting what you want, happiness is liking what you get',
                author: 'H. Jackson Brown, Jr.'
            },
            {
                quote:
                    "Love is when the other person's happiness is more important than your own",
                author: 'H. Jackson Brown, Jr.'
            },
            {
                quote: 'Success is where preparation and opportunity meet',
                author: 'Bobby Unser'
            },
            {
                quote:
                    'The leader has two jobs: (1) to be the lead learner, and (2) to develop other leaders',
                author: 'Noel Tichy'
            },
            {
                quote:
                    "I have not failed. I've just found 10,000 ways that won't work",
                author: 'Thomas Edison'
            },
            {
                quote:
                    'A diamond is merely a lump of coal that did well under pressure',
                author: 'Henry Kissinger'
            },
            {
                quote: 'What we do in life echoes in eternity',
                author: 'Maximus'
            },
            {
                quote:
                    "A lot of times, people don't know what they want until you show it to them",
                author: 'Steve Jobs'
            },
            {
                quote:
                    'A coward is incapable of exhibiting love; it is the prerogative of the brave',
                author: 'Mahatma Gandhi'
            },
            {
                quote:
                    'The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts',
                author: 'Bertrand Russell'
            },
            {
                quote:
                    'We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special',
                author: 'Stephen Hawking'
            },
            {
                quote:
                    'The future belongs to those who believe in the beauty of their dreams',
                author: 'Eleanor Roosevelt'
            },
            {
                quote:
                    'Build courage when courage seems to fail; regain faith when there seems to be little cause for faith; create hope when hope becomes forlorn',
                author: 'General Douglas MacArthur'
            },
            {
                quote:
                    'I never learned how to tune a harp, or play upon a lute; but I know how to raise a small and inconsiderable city to glory and greatness',
                author: 'Themistocles'
            },
            {
                quote:
                    "There's no sense in being precise when you don't even know what you're talking about",
                author: 'John Von Neumann'
            },
            {
                quote:
                    'A customer is the most important visitor on our premises, he is not dependent on us. We are dependent on him. He is not an interruption in our work. He is the purpose of it. He is not an outsider in our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so',
                author: 'Mahatma Gandhi'
            },
            {
                quote:
                    'Success is going from failure to failure without a loss of enthusiasm',
                author: 'Winston Churchill'
            },
            {
                quote:
                    'Success is dangerous because often you don’t understand why you succeeded',
                author: 'Mark Pincus'
            },
            {
                quote: 'You can recognize a pioneer by the arrows in his back',
                author: 'Beverly Rubik'
            },
            {
                quote:
                    'If you want to innovate, you have to be willing to be misunderstood for long periods of time',
                author: 'Jeff Bezos'
            },
            {
                quote:
                    'I am thankful to those who said NO to me, it is because of them I did it myself',
                author: 'Albert Einstein'
            },
            {
                quote:
                    'If friendship is your weakest point, then you are the strongest person in the world',
                author: 'Abraham Lincoln'
            },
            {
                quote: "It always seems impossible until it's done",
                author: 'Nelson Mandela'
            },
            {
                quote:
                    'I am fundamentally an optimist. Whether that comes from nature or nurture, I cannot say. Part of being optimistic is keeping one’s head pointed toward the sun, one’s feet moving forward. There were many dark moments when my faith in humanity was sorely tested, but I would not and could not give myself up to despair. That way lays defeat and death',
                author: 'Nelson Mandela'
            },
            {
                quote:
                    'We believe that technology is at its very best; at its most empowering when it disappears',
                author: 'Jonathan Ive'
            },
            {
                quote:
                    'It’s irreverence, foolish confidence, naivety combined with persistence, open mindedness that created great startups',
                author: 'Vinod Khosla'
            },
            { quote: 'Only the paranoid survive', author: 'Andrew Grove' },
            {
                quote:
                    'In the long run, the power of the people is much stronger than the people in power',
                author: 'Bono'
            },
            {
                quote:
                    'Strength does not come from physical capacity it comes from an indomitable will',
                author: 'Gandhi'
            },
            {
                quote: 'Quiet people Have the loudest mentality',
                author: 'Kurt Cobain'
            },
            {
                quote:
                    'There is no such thing as work-life balance. Everything worth fighting for unbalances your life',
                author: 'Alain de Botton'
            },
            {
                quote:
                    'Competition is over-rated. It enables you to get better at something narrow, but you might miss the big picture',
                author: 'Peter Thiel'
            },
            {
                quote:
                    'Success is not final, failure is not fatal: it is the courage to continue that counts',
                author: 'Winston Churchill'
            },
            {
                quote:
                    'Good judgment comes from experience; experience comes from bad judgment',
                author: 'Mulla Nasruddin'
            },
            {
                quote:
                    'In the realm of ideas, everything depend on enthusiasm... In the real world, all rests on perseverance',
                author: 'Johann Wolfgang van Goethe'
            },
            {
                quote:
                    'Be like the flower that gives its fragrance to even the hand that crushes it',
                author: 'Imam Ali'
            },
            {
                quote:
                    'A hero is someone who has given his or her life to something bigger than oneself',
                author: 'Joseph Campbell'
            },
            {
                quote:
                    'The arc of the moral universe is long but it bends towards justice',
                author: 'Martin Luther King Jr.'
            },
            {
                quote:
                    "It's what you do in the dark that puts you in the light",
                author: 'Under Armour'
            },
            {
                quote:
                    'You have power over your mind, not outside events. Realize this, and you will find strength',
                author: 'Marcus Aurelius'
            },
            {
                quote:
                    'And remember, where you have a concentration of power in a few hands, all too frequently men with the mentality of gangsters get control. History has proven that. All power corrupts; absolute power corrupts absolutely',
                author: 'Sir John Dalberg-Acton'
            },
            {
                quote:
                    'Ideally never absorb information without predicting it first. Then you can update both 1) your knowledge but also 2) your generative model',
                author: 'Andrej Karpathy'
            },
            {
                quote:
                    'If you want to go fast, go alone. If you want to go far, go together',
                author: 'an African proverb'
            }
        ];
        let this_quote = ls[this.rand(0, ls.length - 1)];
        console.log(this_quote);
        return this_quote;
    }
    render() {
        let year = new Date().getFullYear();
        let random_quote = this.randomQuote();
        return (
            <footer>
                <img
                    className='clouds'
                    src='/app/images/illustrations/clouds.png'
                />
                <div className='container'>
                    <div className='message'>{random_quote.quote}</div>
                    <div className='author'>{random_quote.author}</div>
                    <div className='links'>
                        <span className='credit'>
                            &copy; {year}{' '}
                            <a href='javascript:void(0)'>
                                Research in Social Graph Corporation
                            </a>
                        </span>
                        &middot;{' '}
                        <Link className='link' to='/careers'>
                            Careers
                        </Link>
                        &middot;{' '}
                        <Link className='link' to='/legal'>
                            Legal
                        </Link>
                    </div>
                </div>
            </footer>
        );
    }
}
