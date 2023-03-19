import { Injectable } from '@angular/core';
import { Anime } from './anime';

@Injectable({
	providedIn: 'root'
})
export class AnimeService {

	animeBeginnerArr: Anime[] = [
		{
			animeFor : "Beginner", animeImg : '../assets/images/death-note.jpg', animeName: 'Death Note', animeDescription: 'This is anime is about a man name Light Yagami who found a notebook in which if he writes name of a person he/ she will die in 10 minutes(by default ).Time and place can also be defined.That notebook was provided by a shinigami who just want to have some fun on earth.Light wants to create a world with no criminal so decided to kill them all. The whole anime is 37 episodes long.It is a very creative and loved by those who love high IQ things or thinking.'
		},
		{
			animeFor : "Beginner", animeImg : '../assets/images/blue-lock.jpg', animeName: 'Blue lock', animeDescription: 'This anime is based on football. A guy named Ego desire to create the most powerful Striker of the world for the Japanese team so they can win World cup. The main character of this Isagi who is an average but doing hardwork to become a genius.It is best to watch by someone who is interested in watching struggle based anime.'
		},
		{
			animeFor : "Beginner", animeImg : '../assets/images/The-seven-deadly-sins.jpg', animeName: 'The Seven Deadly Sins', animeDescription: 'This anime is about seven sinners and a girl, from god kin, who get reincarnated everytime is she knows about her previous life (for reason watch this anime😁😁). Her lover Meliodas, to be demon king, continuously fighting to release her curse. In his journey he met with 6 more sinners and thus name is The Seven Deadly Sins. My favourate character is Excanor the lion sin of pride. The whole anime is of 5 seasons. This anime is a little erotic but have a very decent story line with humor, fight, romance, etc. If you are magic lover want to start with magic and overpowered character with comdey your search is over.'
		},
		{
			animeFor : "Beginner", animeImg : '../assets/images/Demon-slayer.jpg', animeName : 'Demon Slayer', animeDescription : "This anime is about a boy whose family is killed by demons and his sister becomes a demon. He saves his sister from a demon slayer and by seeing a unique behaviour in demon sister and relationship between siblings, the demon slayer left them and guide the boy to become a demon slayer. This anime is best when it comes to animation. Then kind of animation it has can't be compared with anyone. A fighting anime that have both friendship, loyality, pride and suspense is what an Otaku needs."
		},
	]

	animeNewReleaseArr : Anime[] = [
		{
			animeFor : "New Release", animeImg : '../assets/images/eminence-of-shadow.png', animeName : 'The Eminence of Shadow', animeDescription : "This is anime is about a boy who wants to be a hero who works in shadow. He seeks power which is superior to every being on the planet. He get reincarnated into another world with his knowledge of martial arts. With the magic in isekai he became the most powerful being. He created an organisatin called shadow garden - shadow coming from his alias name. The anime is of 20 episodes and basically demonstrate a overpowered mc in an isekai world. This anime is full of comedy. A must watch anime."
		},
		{
			animeFor : "New Release", animeImg : '../assets/images/skeleton-knight.jpg', animeName : 'The Skeleton Knight', animeDescription : "This anime is about a man who sent to another world. He reincarnated as a skeleton and a vert powerful man. He tries not to show his power or become famous but always do the same. He wants to learn more about that world so he begin his journey as a adventurer.  This anime is a short anime with 12 episodes. This anime is pretty good when it comes to overpowered mc and magic anime. "
		},
		{
			animeFor : "New Release", animeImg : '../assets/images/shikimori-is-not-a-cutie.jpg', animeName : 'Shikimori’s Not Just a Cutie', animeDescription : "This anime is about a girl and a boy who are in high school and are lovers. The boy always hass bad luck and misfortune always happen with him. The girl is a possessive when it comes to her lover otherwise she is cute and lovely. Their love story is kind of imaginary but amzing too. If you love romantic anime then you gonna love this anime. It is a small anime with only 12 episodes."
		},
		{
			animeFor : "New Release", animeImg : '../assets/images/spy-family.png', animeName : 'Spy Family', animeDescription : "When it comes to an anime which is kind of cute, spy-family is the best. This family has 3 members. Dad who is a spy, mom who is an assassin and the main character anya who can read minds. They are not real family but became one due to a reason which I won't tell you😜😜. This anime is small one with two seasons and a very funny one. This is a cute anime and I'm love it a lot."
		}
	]

	animeFamousArr : Anime[] = [
		{
			animeFor : "Famous", animeImg : '../assets/images/naruto.jpg', animeName : 'Naruto', animeDescription : "Naruto is an anime from where most of us started watching anime. It's nerve wretching story and struggling life of naruto teaches us a lot. There is nothing to tell about naruto. Only thing I can say is, if you want to call yourself anime lover then you have to watch naruto, otherwise you are not near to be one. Naruto is story of a boy who dreams to be hokage and is moveing forward towards his dream. He is a junchiriki (a person who holds a tailed beast inside him/her) of nine-tailed beast named Kurama. This anime is story of Naruto's struggle toward his goal. Be sure to watch it completely."
		},
		{
			animeFor : "Famous", animeImg : '../assets/images/one-piece.jpg', animeName : 'One Piece', animeDescription : "This is anime is also one of the big 3's. One piece is anime rotating around it's main character Luffy who wants to be pirate king and is on his journey to find the greatest treasure of the ocean One Piece. It is the only anime which crosses 1000 episodes and still airing. The funny crew and unlogical decisions of luffy makes this anime more loving, funny and exciting alongwith his crew. This is also a must watch anime. Go and watch now!!!"
		},
		{
			animeFor : "Famous", animeImg : '../assets/images/my-hero-academia.jpg', animeName : 'My Hero Academia', animeDescription : "My hero academia is about heroes. In this anime, a boy named Izuku Midoriya wants to be a hero, smae as his idol Al Mighty, but he was born with no powers. Some situation happens and he get powers known as one-for-all and is fighting against all-for-one to protect the world of heroes. Watch this anime to Izuku story and how he become a hero and how he will save the world from bad guys. This anime is loved by all as it shows posititvity and have super heroes whom we all loved at some point of our life. So go and watch this anime and learn how to be motivated even though life is not good."
		},
		{
			animeFor : "Famous", animeImg : '../assets/images/jujutsu-kaisen.jpg', animeName : 'Jujutsu Kaisen', animeDescription : "Jujutsu kaisen is anime about curses. A boy named Yuji Itadori get cursed by the strongest curse of all time named Sukuna. But he can control him on his will. They made a pact to co-exist in the world until they provide what each of them want. This anime is a fighting anime and somewhat of magic type too. By the way let me tell you main charcter of this anime is not the string one. So, go and watch and see who is the strongest exorcist in the whole world."
		}
	]

	constructor() { }

	getBeginner() : Anime[] {
		return this.animeBeginnerArr;
	}

	getNewReleases() : Anime[] {
		return this.animeNewReleaseArr;
	}

	getFamous() : Anime[] {
		return this.animeFamousArr;
	}

}
