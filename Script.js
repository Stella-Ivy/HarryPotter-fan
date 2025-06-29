// =========================================================================
//            HARRY POTTER CHARACTER WEBSITE - JAVASCRIPT LOGIC
// =========================================================================
document.addEventListener('DOMContentLoaded', function() {


    // Website data 
    const houseData = {
        Gryffindor: { logo: 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png' },
        Slytherin: { logo: 'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png' },
        Ravenclaw: { logo: 'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png' },
        Hufflepuff: { logo: 'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png' }
    };

    const characters = [
        { id: 1, name: 'Harry Potter', house: 'Gryffindor', image: 'https://static.standard.co.uk/homesandproperty/s3fs-public/thumbnails/image/2017/08/09/09/gossharrypotteralamy.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000', shortDesc: 'The Boy Who Lived', title: 'The Boy Who Lived', about: 'A brave, loyal, and talented wizard.', longDesc: 'Harry was orphaned as a baby and became famous for surviving the Killing Curse. He attended Hogwarts, sorted into Gryffindor for his courage and determination.', fullStory: 'Harry James Potter\'s life was defined by a prophecy. Marked as an equal by Lord Voldemort, he became the only person to ever survive the Killing Curse. Raised by his magic-hating relatives, the Dursleys, Harry\'s life changed forever on his eleventh birthday when he learned he was a wizard. At Hogwarts, he formed an unbreakable bond with Ron Weasley and Hermione Granger. Together, they navigated the challenges of school life and the ever-present threat of Voldemort\'s return, ultimately leading to a final confrontation where Harry, the master of the Elder Wand, triumphed over the Dark Lord.' },
        { id: 2, name: 'Hermione Granger', house: 'Gryffindor', image: 'https://miro.medium.com/v2/resize:fit:1400/0*fZV8g-1uYh05uz3H', shortDesc: 'A highly intelligent witch', title: 'The Brightest Witch', about: 'Intelligent, logical, and a fierce friend.', longDesc: 'Hermione is the brains of the golden trio. Her vast knowledge and quick thinking have saved her friends on numerous occasions.', fullStory: 'Hermione Jean Granger, a Muggle-born witch, consistently proved that heritage has no bearing on magical ability. Her academic brilliance was matched only by her bravery and fierce loyalty. Often the voice of reason, she was instrumental in every adventure, from deciphering clues to brewing complex potions like Polyjuice. Her founding of S.P.E.W. (Society for the Promotion of Elfish Welfare) showcased her strong moral compass. After the war, she revolutionized the Ministry of Magic, advocating for the rights of all magical beings.' },
        { id: 3, name: 'Ron Weasley', house: 'Gryffindor', image: 'https://external-preview.redd.it/VUSrsTTnZydNBmxAQc9GdKzfR5YmJtXPiIJmWfZ2Few.jpg?auto=webp&s=b78132bd502f9a2242e5ee70c1f78d154f2171a9', shortDesc: 'Harry\'s loyal friend', title: 'A Loyal Friend', about: 'A loyal, humorous, and strategic thinker.', longDesc: 'Ron is Harry\'s first friend at Hogwarts and remains steadfastly loyal through their adventures, showing immense bravery.', fullStory: 'Ronald Bilius Weasley, the sixth of seven children, often felt overshadowed by his brothers but proved himself a hero in his own right. His loyalty to Harry was nearly absolute, providing much-needed humor and a connection to the wizarding family Harry never had. His strategic mind, famously demonstrated during the life-sized wizard\'s chess game, and his courage in the face of his deepest fears (spiders!) were crucial to the trio\'s success. He became an Auror alongside Harry and helped run the successful Weasleys\' Wizard Wheezes.' },
        { id: 4, name: 'Severus Snape', house: 'Slytherin', image: 'https://media1.popsugar-assets.com/files/thumbor/74K1b6ceu46-s1YKA3HyyFu3_9Q=/2850x1895/top/filters:format_auto():quality(85):extract_cover()/2020/08/19/813/n/1922283/tmp_KdlTb4_5f0aefacc3088515_MCDHAPO_EC587.jpg', shortDesc: 'Potions Master at Hogwarts', title: 'The Potions Master', about: 'A complex, stern, and profoundly brave man.', longDesc: 'The enigmatic Potions Master, Snape played a crucial role as a double agent, driven by his lifelong love for Lily Potter.', fullStory: 'Severus Snape is one of the most complex characters in the series. His cold demeanor and apparent hatred for Harry masked a deep, unrequited love for Harry\'s mother, Lily. This love compelled him to secretly protect Harry while acting as a double agent for Dumbledore against Voldemort. As Potions Master and later Headmaster of Hogwarts, he made immense sacrifices, living a life of constant danger and isolation. His final act was to give Harry the memories that contained the key to defeating Voldemort, revealing himself as the "bravest man" Harry ever knew.' },
        { id: 5, name: 'Albus Dumbledore', house: 'Gryffindor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GCOA8zi0glwyeU-v2YgVmZjXPHz6E03G1gZs8v8TKn1HkZOPJVrk7vmWuoE9FOukyVU&usqp=CAU', shortDesc: 'Headmaster of Hogwarts', title: 'The Greatest Wizard', about: 'Wise, powerful, and a guiding force for good.', longDesc: 'Albus Dumbledore was the Headmaster of Hogwarts and the leader of the Order of the Phoenix. He was the only one Voldemort ever feared.', fullStory: 'Albus Percival Wulfric Brian Dumbledore was a wizard of immense power, wisdom, and a penchant for knitting patterns. As Headmaster, he was a mentor and protector to Harry Potter. He orchestrated the long-term plan to defeat Voldemort, understanding that love was the most powerful magic of all. Despite his sometimes manipulative methods and a troubled past involving his family and Gellert Grindelwald, his ultimate goal was always for the greater good. His death, planned with Snape, was a final, strategic sacrifice to aid Harry in his quest.' },
        { id: 6, name: 'Lord Voldemort', house: 'Slytherin', image: 'https://media.harrypotterfanzone.com/lord-voldemort-deathly-hallows-part-2-portrait.jpg', shortDesc: 'The Dark Lord', title: 'He-Who-Must-Not-Be-Named', about: 'A powerful, cruel, and feared Dark wizard.', longDesc: 'Formerly Tom Riddle, Lord Voldemort is obsessed with blood purity and achieving immortality through his Horcruxes.', fullStory: 'Born Tom Marvolo Riddle, he was the heir of Salazar Slytherin. His fear of death drove him to split his soul into multiple Horcruxes, rendering him nearly immortal. He amassed an army of Death Eaters and unleashed two wizarding wars, seeking to purge the world of Muggles and Muggle-borns. His arrogance and inability to understand love were his ultimate weaknesses, leading to his downfall at the hands of Harry Potter, the boy he inadvertently marked as his equal.' },
        { id: 7, name: 'Draco Malfoy', house: 'Slytherin', image: 'https://wallpapers.com/images/hd/draco-malfoy-960-x-1200-picture-nyep5amv13pvw2ss.jpg', shortDesc: 'A cunning Slytherin student', title: 'The Boy Who Had No Choice', about: 'Arrogant, prejudiced, but ultimately conflicted.', longDesc: 'Draco is Harry\'s rival from their first day at Hogwarts. Raised in a pure-blood supremacist family, he is often a bully but struggles with the immense pressure and dark tasks given to him by Lord Voldemort.', fullStory: 'Draco Malfoy was raised to believe in the superiority of pure-blood wizards. He served as a foil to Harry Potter for most of their school years, embodying prejudice and arrogance. However, his journey took a darker turn when he was tasked by Voldemort to kill Dumbledore. Draco found himself unable to commit murder, revealing a conflicted conscience beneath his cruel exterior. In the end, his and his family\'s hesitations played a small but crucial part in Voldemort\'s defeat.' },
        { id: 8, name: 'Sirius Black', house: 'Gryffindor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv5Ab_CpzF4jmUNU-Kmn-XOAL1p2eqVTjhw&s', shortDesc: 'Harry\'s loving godfather', title: 'Padfoot', about: 'Rebellious, loyal, and a devoted godfather.', longDesc: 'Sirius Black was one of the Marauders and Harry Potter\'s godfather. Falsely imprisoned in Azkaban, he escaped to protect Harry.', fullStory: 'Sirius Black was the heir of a dark, pure-blood family but rebelled by becoming a Gryffindor and a loyal friend to James Potter. As an unregistered Animagus (a large black dog named Padfoot), he was a member of the Marauders. After being framed for the murder of Peter Pettigrew and a dozen Muggles, he spent twelve years in Azkaban. He escaped and became the loving, albeit reckless, godfather Harry desperately needed, offering a link to his parents and a brief taste of family before his tragic death.' },
        { id: 9, name: 'Rubeus Hagrid', house: 'Gryffindor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8ccN57G6NnzskZUTTD8vV9pvtbmKJNHGmg&s', shortDesc: 'Keeper of Keys and Grounds', title: 'Keeper of Keys', about: 'A gentle giant with a love for magical creatures.', longDesc: 'Hagrid is the Keeper of Keys and Grounds at Hogwarts. A half-giant with a kind heart, he introduced Harry to the wizarding world.', fullStory: 'Rubeus Hagrid, a half-giant wizard, was expelled from Hogwarts in his third year. Dumbledore allowed him to stay on as gamekeeper. Fiercely loyal and possessing immense strength, Hagrid has a deep affection for all magical creatures, no matter how dangerous. He served as Harry\'s first guide and a constant, warm presence in his life. He was a member of the Order of the Phoenix and fought bravely in both wizarding wars, his loyalty to Dumbledore and Harry never wavering.' },
        { id: 10, name: 'Luna Lovegood', house: 'Ravenclaw', image: 'https://i.pinimg.com/736x/41/21/0b/41210b9527edbf2a9e7e1eef2b145c98.jpg', shortDesc: 'An eccentric Ravenclaw', title: 'Loony Lovegood', about: 'Quirky, open-minded, and a loyal friend.', longDesc: 'Known for her dreamy disposition, Luna is a uniquely perceptive and brave member of Dumbledore\'s Army.', fullStory: 'Luna Lovegood was often ostracized for her eccentric beliefs and odd behavior. However, she possessed a rare wisdom and an unflinching ability to be herself. She saw things others missed and offered comfort and perspective to Harry in his darkest moments. A core member of Dumbledore\'s Army, she fought bravely at the Department of Mysteries and the Battle of Hogwarts, proving that her unconventional nature was a source of great strength and loyalty.' },
        { id: 11, name: 'Cedric Diggory', house: 'Hufflepuff', image: 'https://i.pinimg.com/736x/8d/e9/90/8de990c4c24a1b4d8090843f71ce8715.jpg', shortDesc: 'The Hogwarts Champion', title: 'The Triwizard Champion', about: 'Kind, fair, and a talented wizard.', longDesc: 'Cedric was a popular Hufflepuff student and the Hogwarts Champion in the Triwizard Tournament before his tragic death.', fullStory: 'Cedric Diggory represented the best of Hufflepuff house: he was fair-minded, honest, and hardworking. As a talented and popular student, he was chosen as one of two Hogwarts champions in the Triwizard Tournament. He showed immense sportsmanship, particularly towards Harry. His senseless murder by Peter Pettigrew on Voldemort\'s command marked a turning point in the series, signaling the Dark Lord\'s terrifying return and the end of an era of relative peace.' }
    ];

    // --- HTML Element တွေကို JavaScript ---
    const grid = document.querySelector('.character-grid');
    const filterContainer = document.querySelector('.filters');
    const detailView = document.getElementById('character-detail-view');
    const magicOverlay = document.getElementById('magic-animation-overlay');
    const storyModal = document.getElementById('full-story-modal');
    const magicSound = new Audio('magic_sound.mp3');

    // --- Function 1: Character Card  HTML Function ---
    function displayCharacters(charArray) {
        grid.innerHTML = '';
        charArray.forEach(function(char) {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.setAttribute('data-house', char.house);
            card.setAttribute('data-id', char.id);
            card.innerHTML = 
                '<div class="card-content">' +
                    '<img src="' + char.image + '" alt="' + char.name + '">' +
                    '<h2>' + char.name + '</h2>' +
                    '<p class="house">' + char.house + '</p>' +
                    '<p class="short-desc">' + char.shortDesc + '</p>' +
                    '<button class="view-more-btn">VIEW MORE</button>' +
                '</div>';
            grid.appendChild(card);
        });
    }
    
    // --- Function 2: "VIEW MORE"  Character Detail Box Function ---
    function showDetailView(charId) {
        const character = characters.find(function(c) { return c.id == charId; });
        if (!character) return;

        magicOverlay.classList.remove('hidden');
        magicSound.play().catch(function(e) { console.warn("Audio play failed"); });

        setTimeout(function() {
            magicOverlay.classList.add('hidden');
            const detailContent = detailView.querySelector('.detail-content');
            const houseLogoUrl = houseData[character.house] ? houseData[character.house].logo : '';

            detailContent.innerHTML = 
                '<h1 class="char-name">' + character.name + '</h1>' +
                '<div class="char-house-container">' +
                    '<img src="' + houseLogoUrl + '" alt="' + character.house + ' Logo" class="char-house-logo">' +
                    '<p class="char-house">' + character.house + ' ⚡</p>' +
                '</div>' +
                '<div class="char-image-container">' +
                    '<img src="' + character.image + '" alt="' + character.name + '" class="char-img">' +
                    '<h2 class="char-title">' + character.title + '</h2>' +
                '</div>' +
                '<div class="about-section">' +
                    '<h3>About</h3>' +
                    '<p class="char-desc"><strong>' + character.about + '</strong><br><br>' + character.longDesc + '</p>' +
                '</div>' +
                '<div class="detail-buttons">' +
                    '<button class="detail-btn back-btn">← Back</button>' +
                    '<button class="detail-btn heart-btn">💛</button>' +
                    '<button class="detail-btn more-btn">More</button>' +
                '</div>';
            detailView.classList.remove('hidden');
            
            detailView.querySelector('.back-btn').addEventListener('click', function() { detailView.classList.add('hidden'); });
            detailView.querySelector('.heart-btn').addEventListener('click', createHeartBurst);
            detailView.querySelector('.more-btn').addEventListener('click', function() { showFullStory(charId); });

        }, 1500);
    }
    
    // --- Function 3: "More" Function ---
    function showFullStory(charId) {
        const character = characters.find(function(c) { return c.id == charId; });
        if (!character || !character.fullStory) return;

        const storyDetails = document.getElementById('story-details');
        storyDetails.innerHTML = '<h2>' + character.name + '</h2><p>' + character.fullStory + '</p>';
        storyModal.classList.remove('hidden');
    }
    // --- Function 4: Heart Function ---
    function createHeartBurst(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        const hearts = ['❤️', '🧡', '💛', '💚', '💙', '💜', '💖'];
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'flying-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = originX + 'px';
            heart.style.top = originY + 'px';
            const xEnd = (Math.random() - 0.5) * 400;
            const yEnd = -(Math.random() * 300 + 200);
            heart.style.setProperty('--x-end', xEnd + 'px');
            heart.style.setProperty('--y-end', yEnd + 'px');
            heart.style.animation = 'fly-up ' + (Math.random() * 1 + 1.5) + 's ease-out forwards';
            document.body.appendChild(heart);
            setTimeout(function() { heart.remove(); }, 2500);
        }
    }

    // --- Event Listeners ---
    filterContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.filter-btn');
        if (!target) return;
        document.querySelectorAll('.filter-btn').forEach(function(btn) { btn.classList.remove('active'); });
        target.classList.add('active');
        const filter = target.getAttribute('data-filter');
        document.querySelectorAll('.character-card').forEach(function(card) {
            if (filter === 'all' || card.getAttribute('data-house') === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });

    grid.addEventListener('click', function(e) {
        const btn = e.target.closest('.view-more-btn');
        if (btn) {
            const card = btn.closest('.character-card');
            showDetailView(card.getAttribute('data-id'));
        }
    });

    storyModal.querySelector('.close-story-btn').addEventListener('click', function() {
        storyModal.classList.add('hidden');
    });

    // --- Website start Character show ---
    displayCharacters(characters);
});

