const fs = require('fs');
const path = require('path');

const projectRoot = 'd:/Project-GameWheel';
const appDir = path.join(projectRoot, 'src/app');

const categories = {
  'character-creator': {
    name: 'Character Creator & OC Wheels',
    icon: 'User',
    bgColor: 'bg-retro-orange',
    href: '/character-creator/',
    desc: 'Design random characters, OCs, and avatars instantly. Spin for hairstyles, outfits, eyes, genders, skin tones, and gacha ideas.',
    title: 'Character Creator & OC Wheel Generators | SpinVerse',
    description: 'Design random characters, OCs, and avatars instantly. Spin for hairstyles, outfits, eyes, genders, skin tones, and gacha ideas.',
    wheels: [
      {
        slug: 'create-an-oc',
        name: 'Create an OC Wheel',
        desc: 'Spin this wheel to generate a random background, race, or class for your next original character.',
        options: ["Warrior", "Mage", "Thief", "Cleric", "Elf", "Dwarf", "Orc", "Demon", "Angel", "Cyborg", "Alien"],
        pitch: 'Creating a new original character (OC) from scratch can be intimidating. Our Create an OC Wheel acts as a creative prompt, giving you a base archetype to build upon. Perfect for writers, artists, and tabletop roleplayers.',
        faqs: [
          { q: 'How can I expand on the class/race selected?', a: 'Once you select an archetype, spin the hair, eye, and clothing style wheels to build out the full design.' }
        ]
      },
      {
        slug: 'boy-or-girl-oc',
        name: 'Boy or Girl OC Spinner',
        desc: 'Stuck on deciding the gender identity of your next character? Spin the pointer to decide instantly.',
        options: ["Boy", "Girl", "Non-binary", "Genderfluid", "Agender"],
        pitch: 'If you find yourself repeatedly creating characters of the same gender, break the habit by using the Boy or Girl OC Spinner. It introduces unbiased selection into your character design workflow.',
        faqs: [
          { q: 'Can I add custom gender identities?', a: 'Yes! Simply use the editor panel to add, remove, or rename the options to match your character world.' }
        ]
      },
      {
        slug: 'gacha-character-generator',
        name: 'Gacha Character Generator Wheel',
        desc: 'Spin for styling themes, aesthetics, and fashion concepts to build your next Gacha Life or Gacha Club character.',
        options: ["Sweet Candy Style", "Dark Goth Style", "Steampunk Style", "Retro Cyberpunk", "Pastel Soft Girl", "Sporty Chic", "Royal Knight"],
        pitch: 'Gacha creators love testing unique styling themes. Use this wheel to challenge your design capabilities by forcing random outfit themes.',
        faqs: [
          { q: 'Does this work for Gacha Club?', a: 'Yes, these prompts fit Gacha Life, Gacha Club, and general avatar creators.' }
        ]
      },
      {
        slug: 'hair-color',
        name: 'Hair Color Wheel',
        desc: 'Spin to pick a random hair dye or OC hair color. Preloaded with natural tones and vibrant neon dyes.',
        options: ["Brown", "Black", "Blonde", "Ginger", "Platinum Blonde", "Neon Green", "Pastel Pink", "Lilac Purple", "Cyan Blue", "Deep Red"],
        pitch: 'Pick the perfect color palette for your character or your next hair salon visit. This picker spans from classic dark brunette and warm ginger to modern pastel blues and glowing purples.',
        faqs: [
          { q: 'Can I add multi-colored styles?', a: 'Absolutely, write "Split Dye (Pink/Blue)" in the options list for custom results.' }
        ]
      },
      {
        slug: 'hair-style',
        name: 'Hair Style Wheel',
        desc: 'Select a random hairstyle for character sheets, drawings, or model designs.',
        options: ["Short Pixie", "Curly Bob", "Long Waves", "Side Undercut", "Twin Pigtails", "High Ponytail", "Messy Bun", "Spiky Anime", "Afro Puff", "Dreadlocks"],
        pitch: 'Hairstyles define a character\'s personality. If you draw the same hair layout every time, spin this selector for a fresh layout idea.',
        faqs: [
          { q: 'Is this suitable for both male and female characters?', a: 'Yes, all styles are unisex and fit any OC archetype.' }
        ]
      },
      {
        slug: 'eye-color',
        name: 'Eye Color Wheel',
        desc: 'Decide eye shades and fantasy iris styles for your OC instantly.',
        options: ["Ocean Blue", "Forest Green", "Amber Gold", "Crimson Red", "Hazel", "Dark Brown", "Amethyst Violet", "Heterochromia (Blue/Green)", "Pure Black"],
        pitch: 'Add mysterious fantasy or realistic eye colors to your characters. Includes special options like heterochromia.',
        faqs: [
          { q: 'How do I represent glowing fantasy eyes?', a: 'Simply append "(Glowing)" to any of the colors in the edit panel.' }
        ]
      },
      {
        slug: 'skin-tone',
        name: 'Skin Tone Wheel',
        desc: 'Select random skin shades, undertones, and creature textures.',
        options: ["Fair Peach", "Warm Beige", "Golden Olive", "Rich Bronze", "Deep Cocoa", "Alabaster White", "Pale Gray (Alien/Undead)", "Neon Blue"],
        pitch: 'Create diverse characters or design fantasy entities with unique skin textures. Includes alien and undead options.',
        faqs: [
          { q: 'Is the palette adjustable?', a: 'Yes, customize all hex tones or names in the bulk text area.' }
        ]
      },
      {
        slug: 'clothing-style',
        name: 'Clothing Style Wheel',
        desc: 'Get fashion ideas and outfit aesthetics for character creators.',
        options: ["Casual Streetwear", "Victorian Gothic", "Futuristic Techwear", "Traditional Kimono", "High School Uniform", "Formal Tux/Gown", "Cyberpunk Rebel", "Fantasy Armor"],
        pitch: 'Dress your OC in unique styles. Transition from high-tech futuristic gear to historical dresses and fantasy armor.',
        faqs: [
          { q: 'How do I combine styles?', a: 'Spin twice and combine the results, like Cyberpunk Victorian!' }
        ]
      },
      {
        slug: 'gender-randomizer',
        name: 'Gender Randomizer Wheel',
        desc: 'Randomize pronouns, gender identities, and presentation styles.',
        options: ["Male", "Female", "Non-binary", "Androgynous", "Genderqueer", "Demiboy", "Demigirl"],
        pitch: 'Great for inclusive character sheets, creative writing exercises, and roleplay generation.',
        faqs: [
          { q: 'Are pronouns preloaded?', a: 'You can write custom pronouns alongside the genders in the options menu.' }
        ]
      },
      {
        slug: 'age-spinner',
        name: 'Age Spinner Wheel',
        desc: 'Randomly choose character ages and development stages.',
        options: ["Child (5-10)", "Pre-teen (11-12)", "Teenager (13-17)", "Young Adult (18-25)", "Adult (26-45)", "Middle Aged (46-60)", "Elderly (60+)"],
        pitch: 'Set the age of your main protagonist or NPC characters. Adds realism and structure to your storyboards.',
        faqs: [
          { q: 'Can I set specific numbers?', a: 'Yes, write specific ages like "21 years" or "84 years" to fine-tune.' }
        ]
      },
      {
        slug: 'nationality-generator',
        name: 'Nationality Generator Wheel',
        desc: 'Pick random national backgrounds and citizenships for global characters.',
        options: ["American", "Japanese", "British", "Brazilian", "French", "German", "Australian", "Canadian", "South Korean", "Indian", "Mexican", "Spanish"],
        pitch: 'Provide realistic diversity to your international rosters, simulation games, and character sheets.',
        faqs: [
          { q: 'Can I add specific regions?', a: 'Yes, modify the wheel list to specify cities or sub-regions.' }
        ]
      }
    ]
  },
  'video-game-wheels': {
    name: 'Video Game Wheels',
    icon: 'Gamepad2',
    bgColor: 'bg-retro-blue',
    href: '/video-game-wheels/',
    desc: 'Spin to pick gaming setups, agents, champions, types, challenges, and play styles. Covers Valorant, LoL, Pokémon, Roblox, and Fortnite.',
    title: 'Video Game Randomizer Wheels | SpinVerse',
    description: 'Spin to pick gaming setups, agents, champions, types, challenges, and play styles. Covers Valorant, LoL, Pokémon, Roblox, and Fortnite.',
    wheels: [
      {
        slug: 'valorant-agents',
        name: 'Valorant Agents Wheel',
        desc: 'Spin to pick a random Valorant agent to play in your next match.',
        options: ["Jett", "Raze", "Phoenix", "Reyna", "Yoru", "Neon", "Sage", "Cypher", "Killjoy", "Chamber", "Fade", "Sova", "Breach", "Omen", "Viper", "Astra", "Harbor", "Gekko", "Deadlock", "Iso", "Clove"],
        pitch: 'Tired of locking in Jett or Sage? Let the wheel decide your agent and practice different playstyles in unrated matches.',
        faqs: [{ q: 'Is the agent list updated?', a: 'Yes, we include recent agents. You can append new ones via the editor.' }]
      },
      {
        slug: 'league-of-legends-champions',
        name: 'League of Legends Champions Wheel',
        desc: 'Randomly choose a League champion for your next draft or ARAM game.',
        options: ["Yasuo", "Ahri", "Lux", "Jinx", "Lee Sin", "Thresh", "Garen", "Teemo", "Ezreal", "Zed", "Katarina", "Akali", "Master Yi", "Darius", "Ashe", "Vayne", "Kai'Sa", "Ekko"],
        pitch: 'Break the meta by choosing a random League of Legends champion. Settle champion select disputes with friends.',
        faqs: [{ q: 'Does it support lanes?', a: 'You can customize options to group champions by role (Top, Mid, Jungle, ADC, Support).' }]
      },
      {
        slug: 'roblox-games',
        name: 'Roblox Games Wheel',
        desc: 'Spin to choose a fun Roblox game to play when you are bored.',
        options: ["Adopt Me!", "Blox Fruits", "Brookhaven RP", "Tower of Hell", "Murder Mystery 2", "Piggy", "Royale High", "Arsenal", "Pet Simulator 99", "BedWars"],
        pitch: 'With millions of user-created servers, finding a good game on Roblox can be slow. Spin this preloaded wheel of top games to pick your next session.',
        faqs: [{ q: 'How do I add my favorite games?', a: 'Type the game titles in the option text box and hit update.' }]
      },
      {
        slug: 'smash-bros-characters',
        name: 'Smash Bros Characters Wheel',
        desc: 'Randomize your fighter for Super Smash Bros. Ultimate battles.',
        options: ["Mario", "Donkey Kong", "Link", "Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff", "Peach", "Bowser", "Zelda", "Sheik", "Marth", "Mewtwo", "Sonic", "Steve", "Sephiroth", "Sora"],
        pitch: 'Make couch multiplayer sessions more interesting by forcing everyone to play a random Smash Bros fighter.',
        faqs: [{ q: 'Are all DLC characters supported?', a: 'We include top DLC characters like Steve and Sora. You can add the rest manually.' }]
      },
      {
        slug: 'overwatch-2-characters',
        name: 'Overwatch 2 Characters Wheel',
        desc: 'Select a random Tank, Damage, or Support hero for your next Overwatch match.',
        options: ["Tracer", "Reaper", "Genji", "Hanzo", "Cassidy", "Soldier: 76", "Widowmaker", "Pharah", "Mei", "Bastion", "Junkrat", "Sombra", "Doomfist", "D.Va", "Winston", "Reinhardt", "Roadhog", "Zarya", "Mercy", "Lucio", "Ana", "Kiriko", "Lifeweaver", "Illari", "Juno"],
        pitch: 'Switch up your role queue options by letting the Overwatch 2 wheel pick your character.',
        faqs: [{ q: 'Can I filter by role?', a: 'Yes, just edit the list to contain only tanks, DPS, or supports.' }]
      },
      {
        slug: 'rainbow-six-operators',
        name: 'Rainbow Six Operators Wheel',
        desc: 'Spin to choose a random Attack or Defense operator in Siege.',
        options: ["Sledge", "Thatcher", "Ash", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ", "Buck", "Blackbeard", "Capitao", "Hibana", "Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jager", "Bandit", "Frost", "Valkyrie", "Caveira", "Echo"],
        pitch: 'Unleash tactical chaos by forcing players to use random operator abilities in Rainbow Six Siege.',
        faqs: [{ q: 'Does it separate Attack and Defense?', a: 'You can remove defenders when on attack, or keep both for a full surprise.' }]
      },
      {
        slug: 'starter-pokemon',
        name: 'Starter Pokemon Wheel',
        desc: 'Pick a random starter Pokémon from Gen 1 to Gen 9 for your next challenge run.',
        options: ["Bulbasaur", "Charmander", "Squirtle", "Chikorita", "Cyndaquil", "Totodile", "Treecko", "Torchic", "Mudkip", "Turtwig", "Chimchar", "Piplup", "Snivy", "Tepig", "Oshawott", "Chespin", "Fennekin", "Froakie", "Rowlet", "Litten", "Popplio", "Grookey", "Scorbunny", "Sobble", "Sprigatito", "Fuecoco", "Quaxly"],
        pitch: 'Decide your starting partner for a Nuzlocke or custom challenge run across any Pokémon region.',
        faqs: [{ q: 'Is Pikachu on the list?', a: 'You can add Pikachu or Eevee manually if you are playing Yellow/Let\'s Go!' }]
      },
      {
        slug: 'pokemon-types',
        name: 'Pokemon Types Wheel',
        desc: 'Spin to select a random Pokémon type. Perfect for monotype challenge runs.',
        options: ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Steel", "Dark", "Fairy"],
        pitch: 'Monotype challenges force you to build a team sharing a single type. Let the wheel pick your fate.',
        faqs: [{ q: 'Are dual types supported?', a: 'Spin the wheel twice to get a dual-typing combination.' }]
      },
      {
        slug: 'fortnite-challenges',
        name: 'Fortnite Challenges Wheel',
        desc: 'Spin to get a fun challenge to complete during your next battle royale match.',
        options: ["Pistols Only Win", "No Shield Challenge", "First Weapon You See Only", "No Building Match (Zero Build)", "Land at Named Locations Only", "Pacifist Run (No Kills)", "Mythic Weapons Only", "Skybase Challenge"],
        pitch: 'Spice up boring squad lobbies or solo play with intense custom Fortnite challenges.',
        faqs: [{ q: 'Can I do this with squads?', a: 'Yes! Challenge your entire squad to follow the selected rule.' }]
      }
    ]
  },
  'party-games': {
    name: 'Party & Social Games',
    icon: 'PartyPopper',
    bgColor: 'bg-retro-mint',
    href: '/party-games/',
    desc: 'Interactive wheels for social events, sleepovers, and parties. Spin for Truth or Dare questions, Spin the Bottle, Charades, and funny challenges.',
    title: 'Party & Social Game Wheels | SpinVerse',
    description: 'Interactive wheels for social events, sleepovers, and parties. Spin for Truth or Dare questions, Spin the Bottle, Charades, and funny challenges.',
    wheels: [
      {
        slug: 'truth-or-dare',
        name: 'Truth or Dare Wheel',
        desc: 'Spin the wheel to get classic Truth or Dare prompts for kids, teens, and families.',
        options: ["Truth: What is your biggest secret?", "Dare: Do 10 pushups", "Truth: Who is your crush?", "Dare: Eat a raw piece of garlic", "Truth: Tell a funny lie you told", "Dare: Let someone text from your phone"],
        pitch: 'Never run out of ideas for Truth or Dare. Spin this interactive spinner to assign a fun question or funny action to the players.',
        faqs: [{ q: 'Is it clean for families?', a: 'Yes, this wheel contains lighthearted prompts perfect for family gatherings.' }]
      },
      {
        slug: 'extreme-truth-or-dare',
        name: 'Extreme Truth or Dare Wheel',
        desc: 'Spin for highly challenging, intensive, and crazy truths and dares.',
        options: ["Truth: Have you ever cheated on a test?", "Dare: Call a random contact and sing happy birthday", "Truth: What is your biggest regret?", "Dare: Let the group post a story on your Instagram"],
        pitch: 'Push the limits of your party game night. This selection is designed for close friends who aren\'t afraid of funny embarrassment.',
        faqs: [{ q: 'Are these safe to perform?', a: 'Yes, they are safe but highly entertaining. Always skip any dare you feel uncomfortable with.' }]
      },
      {
        slug: 'adult-truth-or-dare',
        name: 'Adult Truth or Dare Wheel',
        desc: 'Spin to choose spice, mature secrets, and provocative dares. Age-restricted interstitial included.',
        options: ["Truth: What is your secret fantasy?", "Dare: Give a sensual massage to the person next to you", "Truth: Tell the group your most embarrassing romantic encounter", "Dare: Whisper something provocative in someone's ear"],
        needsAgeGate: true,
        pitch: 'An interactive adult-themed variation of Truth or Dare. Ideal for adult couples, date nights, or house parties.',
        faqs: [{ q: 'Does it require signup?', a: 'No signup or accounts needed. We use a simple age verification gate to protect minors.' }]
      },
      {
        slug: 'spin-the-bottle',
        name: 'Spin the Bottle Wheel',
        desc: 'A virtual spinner replacing physical bottle setups for classic games.',
        options: ["Player A", "Player B", "Player C", "Player D", "Player E", "Player F"],
        pitch: 'Don\'t have an empty bottle or a flat floor? Type your friends\' names onto the wheel and let the pointer choose who kisses or answers next.',
        faqs: [{ q: 'How many players can play?', a: 'Supports up to 100 players. Add names to the options list easily.' }]
      },
      {
        slug: 'charades-topics',
        name: 'Charades Topics Wheel',
        desc: 'Get hilarious and creative topics for family charades games.',
        options: ["Mimic a T-Rex eating", "Pretend to be a glitching robot", "Act out playing golf", "Mimic cooking a hot dog", "Pretend you are walking on ice", "Act like an astronaut floating"],
        pitch: 'Generate quick acting ideas instantly. Settle disputes about what characters or actions should be acted out.',
        faqs: [{ q: 'Are the topics hard?', a: 'They are balanced for both kids and adults to enjoy.' }]
      },
      {
        slug: 'scattergories-letters',
        name: 'Scattergories Letters Wheel',
        desc: 'Spin to select a random letter for Scattergories and vocabulary games.',
        options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "W"],
        pitch: 'Avoid picking the same letters repeatedly. This generator matches standard gameplay by excluding rare letters like Q, X, and Z.',
        faqs: [{ q: 'Why are some letters missing?', a: 'We exclude hard letters (Q, X, Y, Z) to keep games fun and moving.' }]
      },
      {
        slug: 'questions-wheel',
        name: 'Questions Wheel',
        desc: 'Spin for icebreaker questions, get-to-know-you topics, and conversational prompts.',
        options: ["What is your superpower?", "If you won $1M, what is the first purchase?", "Where is your dream vacation?", "What is your biggest fear?", "Who inspires you the most?", "What is your favorite childhood memory?"],
        pitch: 'Start deep conversations in classrooms, team-building sessions, or friendly hangouts.',
        faqs: [{ q: 'Are the questions clean?', a: 'Yes, suitable for corporate icebreakers and school classes.' }]
      },
      {
        slug: 'funny-dares',
        name: 'Funny Dares Wheel',
        desc: 'Get goofy, simple, and funny physical challenge dares.',
        options: ["Talk in a British accent for 3 rounds", "Do your best chicken impression", "Balance a spoon on your nose", "Act like a drama queen", "Talk to a houseplant for 1 minute"],
        pitch: 'Perfect for children\'s birthday parties and family fun. Full of goofy, low-stakes physical challenges.',
        faqs: [{ q: 'Can these dares be done indoors?', a: 'Yes, all dares are designed to be performed safely inside.' }]
      },
      {
        slug: 'song-association',
        name: 'Song Association Wheel',
        desc: 'Spin a keyword and try to sing a song containing that word in 10 seconds.',
        options: ["Word: LOVE", "Word: FIRE", "Word: HEAVEN", "Word: DANCE", "Word: NIGHT", "Word: WORLD", "Word: BLUE", "Word: HAPPY", "Word: CRY"],
        pitch: 'Put your musical memory to the test. Spin a word, start a timer, and sing standard pop or classic songs.',
        faqs: [{ q: 'What are the rules?', a: 'A player has 10 seconds to sing at least one line of a real song containing the word.' }]
      },
      {
        slug: 'things-to-do-when-bored',
        name: 'Things to Do When Bored Wheel',
        desc: 'Spin to cure boredom with productive, creative, and physical activity prompts.',
        options: ["Read a book chapter", "Organize your desk drawer", "Learn a 5-minute card trick", "Go for a brisk walk", "Try drawing a self-portrait", "Stretch for 10 minutes", "Listen to a new album"],
        pitch: 'Break the endless social media scrolling. Let the spinner choose a offline activity to refresh your mind.',
        faqs: [{ q: 'Do these require supplies?', a: 'Most activities are completely free and require zero preparation.' }]
      },
      {
        slug: 'punishment-wheel',
        name: 'Punishment Wheel',
        desc: 'Spin to assign silly chores, forfeits, or penalties for board game losers.',
        options: ["Buy snacks for everyone", "Do the dishes", "Sing a song chosen by the group", "Post an embarrassing selfie", "Do 20 jumping jacks", "Speak only in whispers next turn"],
        pitch: 'Add real stakes to board games, card games, or console tournaments. Make the loser spin the punishment wheel!',
        faqs: [{ q: 'Are these severe?', a: 'No, they are lighthearted and perfect for friendly games.' }]
      }
    ]
  },
  'food-wheels': {
    name: 'Food Wheels',
    icon: 'Utensils',
    bgColor: 'bg-retro-orange',
    href: '/food-wheels/',
    desc: 'Can\'t agree on lunch, dinner, or snacks? Spin the Food Wheels to pick a random restaurant type, fast food chain, sweet dessert, or healthy snack.',
    title: 'Food Decider & Dinner Wheel Spinners | SpinVerse',
    description: 'Can\'t agree on lunch, dinner, or snacks? Spin the Food Wheels to pick a random restaurant type, fast food chain, sweet dessert, or healthy snack.',
    wheels: [
      {
        slug: 'what-to-eat',
        name: 'What to Eat Wheel',
        desc: 'Solve the dinner debate instantly by picking a random food cuisine.',
        options: ["Pizza", "Tacos & Mexican", "Burgers & Fries", "Sushi & Japanese", "Pasta & Italian", "Thai Curry", "Indian Masala", "Healthy Salad", "Sandwiches & Deli"],
        pitch: 'Stop asking "What do you want to eat?" and letting it drag on. Spin the wheel and let fate decide your dinner cuisine.',
        faqs: [{ q: 'Can I add local restaurants?', a: 'Yes! Replace generic cuisines with your local spots in the custom editor.' }]
      },
      {
        slug: 'fast-food-restaurants',
        name: 'Fast Food Restaurants Wheel',
        desc: 'Spin to pick between popular fast-food chains for a quick lunch.',
        options: ["McDonald's", "Burger King", "Wendy's", "Subway", "Taco Bell", "KFC", "Popeyes", "Chick-fil-A", "Domino's", "Pizza Hut", "Starbucks", "Dunkin'"],
        pitch: 'Too tired to cook and can\'t choose a drive-thru? Spin for an instant fast food pick.',
        faqs: [{ q: 'Can I customize it to nearby stores?', a: 'Yes, remove chains that aren\'t available in your city.' }]
      },
      {
        slug: 'snacks',
        name: 'Snacks Wheel',
        desc: 'Select a random healthy snack or salty chip bag.',
        options: ["Potato Chips", "Chocolate Bar", "Apple Slices with Peanut Butter", "Mixed Nuts", "Greek Yogurt", "Popcorn", "Pretzels", "Cheese Stick", "Granola Bar"],
        pitch: 'Can\'t decide what to munch on? Settle on a quick snack choice from our mix of healthy and treats options.',
        faqs: [{ q: 'Can I add diet restrictions?', a: 'Yes, add keto, vegan, or gluten-free snacks in the menu.' }]
      },
      {
        slug: 'dessert',
        name: 'Dessert Wheel',
        desc: 'Spin for a sweet treat idea. Covers cakes, pies, and baked cookies.',
        options: ["Chocolate Cake", "Vanilla Ice Cream", "Warm Apple Pie", "Fresh Baked Chocolate Chip Cookies", "Strawberry Cheesecake", "Glazed Donuts", "Crème Brûlée", "Brownie Sundae"],
        pitch: 'End your meal with a randomly selected dessert. Great for deciding bakery menus or weekend baking.',
        faqs: [{ q: 'Are these recipes?', a: 'These are sweet dessert categories to inspire your next baking or ordering decision.' }]
      },
      {
        slug: 'fruit',
        name: 'Fruit Wheel',
        desc: 'Spin to choose a healthy piece of fruit to eat.',
        options: ["Red Apple", "Banana", "Sweet Strawberry", "Juicy Orange", "Blueberries", "Green Grapes", "Watermelon Slice", "Fresh Pineapple", "Peach", "Mango"],
        pitch: 'Encourage kids or yourself to eat more fruit by making the selection a fun game.',
        faqs: [{ q: 'Can I add tropical fruits?', a: 'Yes! Add dragonfruit, kiwi, or papaya in the options.' }]
      }
    ]
  },
  'geography-wheels': {
    name: 'Geography Wheels',
    icon: 'Globe',
    bgColor: 'bg-retro-blue',
    href: '/geography-wheels/',
    desc: 'Spin to select random countries, US states, European nations, or run the 64-country roulette challenge. Great for geography trivia and travel planning.',
    title: 'Geography & Country Wheel Spinners | SpinVerse',
    description: 'Spin to select random countries, US states, European nations, or run the 64-country roulette challenge. Great for geography trivia and travel planning.',
    wheels: [
      {
        slug: 'country-wheel',
        name: 'Country Wheel Spinner',
        desc: 'Pick a random nation worldwide for trivia, gaming regions, or projects.',
        options: ["United States", "Japan", "Brazil", "Germany", "Australia", "Canada", "India", "South Africa", "United Kingdom", "France", "Italy", "China", "Egypt", "Mexico", "Russia", "Argentina"],
        pitch: 'Select global countries randomly. Perfect for history teachers, geography study sessions, or choosing vacation destinations.',
        faqs: [{ q: 'Are all countries included?', a: 'This wheel features a balanced selection of major global nations. Edit to add any specific country.' }]
      },
      {
        slug: '64-country-roulette',
        name: '64 Country Roulette',
        desc: 'The ultimate 64-country roulette wheel for gaming challenges and brackets.',
        options: ["USA", "Canada", "Mexico", "Brazil", "Argentina", "UK", "France", "Germany", "Italy", "Spain", "Russia", "Egypt", "South Africa", "Nigeria", "Kenya", "India", "China", "Japan", "South Korea", "Australia", "New Zealand", "Saudi Arabia", "Turkey", "Greece", "Sweden", "Norway", "Netherlands", "Switzerland", "Poland", "Ukraine", "Vietnam", "Thailand", "Indonesia", "Philippines", "Colombia", "Peru", "Chile", "Venezuela", "Morocco", "Ghana", "Ethiopia", "Pakistan", "Bangladesh", "Iran", "Iraq", "Israel", "Singapore", "Malaysia", "New Zealand", "Portugal", "Austria", "Denmark", "Finland", "Ireland", "Belgium", "Czechia", "Hungary", "Romania", "Cuba", "Jamaica", "Costa Rica", "Panama", "Ecuador", "Bolivia"],
        pitch: 'Spin the massive 64-country roulette. Ideal for running international gaming challenge filters, FIFA drafts, or global trivia games.',
        faqs: [{ q: 'Is it hard to read 64 slices?', a: 'It spins cleanly! You can toggle list views to double-check the final result.' }]
      },
      {
        slug: 'us-states',
        name: 'US States Wheel',
        desc: 'Spin to choose from the 50 states of America randomly.',
        options: ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan", "Washington", "Arizona", "Massachusetts", "Virginia", "Colorado", "Tennessee"],
        pitch: 'Help children learn USA geography, pick roadtrip states, or choose locations for regional simulator matches.',
        faqs: [{ q: 'Are all 50 states preloaded?', a: 'This preset features major states. You can copy-paste the full list of 50 states in the Bulk Edit box in seconds.' }]
      },
      {
        slug: 'europe-countries',
        name: 'Europe Countries Wheel',
        desc: 'Randomly pick an European country for travel plans or educational research.',
        options: ["United Kingdom", "France", "Germany", "Italy", "Spain", "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Portugal", "Greece", "Poland", "Czechia"],
        pitch: 'Select an European destination. Excellent for planning Eurotrip legs or studying history.',
        faqs: [{ q: 'Are microstates like Vatican City on it?', a: 'You can add Monaco, Andorra, or San Marino manually in the options.' }]
      }
    ]
  },
  'generators': {
    name: 'Random Generators',
    icon: 'Cpu',
    bgColor: 'bg-retro-yellow',
    href: '/generators/',
    desc: 'Spin pure mathematical and utility decision generators. Includes the customizable number wheel, hex color generator, percent wheel, and alphabet spinner.',
    title: 'Random Generator Wheels & Math Pickers | SpinVerse',
    description: 'Spin pure mathematical and utility decision generators. Includes the customizable number wheel, hex color generator, percent wheel, and alphabet spinner.',
    wheels: [
      {
        slug: 'color-wheel',
        name: 'Color Wheel Spinner',
        desc: 'Spin to select a random color hex code for designs or choices.',
        options: ["Red (#EF4444)", "Blue (#3B82F6)", "Green (#10B981)", "Yellow (#F59E0B)", "Purple (#8B5CF6)", "Pink (#EC4899)", "Orange (#F97316)", "Teal (#14B8A6)"],
        pitch: 'Pick painting palettes, graphic design base colors, or gaming crew colors instantly using this tool.',
        faqs: [{ q: 'Are colors CSS-compatible?', a: 'Yes, hex values are listed alongside color names.' }]
      },
      {
        slug: 'number-wheel',
        name: 'Number Wheel Spinner',
        desc: 'Configurable number range wheel. Replaces standard random number spinner variants.',
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        isNumberWheel: true,
        pitch: 'Configure your minimum and maximum range bounds, and let the wheel dynamically rebuild itself. A clean replacement for multiple static number range keywords.',
        faqs: [{ q: 'How high can the range go?', a: 'You can set it up to 100 or higher, though numbers under 50 render best on screen.' }]
      },
      {
        slug: 'percent-wheel',
        name: 'Percent Wheel Spinner',
        desc: 'Spin to get a random percentage value between 10% and 100%.',
        options: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "95%", "100%"],
        pitch: 'Decide split values, discount levels, or game probabilities randomly with this math utility.',
        faqs: [{ q: 'Can I add smaller steps?', a: 'Yes, add steps like "1%", "5%", or "99%" to the editor.' }]
      },
      {
        slug: 'alphabet-wheel',
        name: 'Alphabet Wheel Spinner',
        desc: 'Spin to select a random letter from A to Z.',
        options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        pitch: 'Excellent for spelling games, choosing acronyms, naming generators, or letter drafts.',
        faqs: [{ q: 'Does it contain foreign characters?', a: 'You can add accents (like É, Ö, Ñ) in the custom menu.' }]
      },
      {
        slug: 'periodic-table-picker',
        name: 'Periodic Table Picker',
        desc: 'Spin to select a random chemical element from the periodic table.',
        options: ["Hydrogen (H)", "Helium (He)", "Lithium (Li)", "Beryllium (Be)", "Boron (B)", "Carbon (C)", "Nitrogen (N)", "Oxygen (O)", "Fluorine (F)", "Neon (Ne)", "Sodium (Na)", "Magnesium (Mg)"],
        pitch: 'A chemistry study assistant. Spin to decide which element to research next or test students on.',
        faqs: [{ q: 'Are noble gases included?', a: 'Yes, helium and neon are included. Add more heavy elements as needed.' }]
      }
    ]
  },
  'creative-wheels': {
    name: 'Creative & Entertainment',
    icon: 'Sparkles',
    bgColor: 'bg-retro-orange',
    href: '/creative-wheels/',
    desc: 'Unlock creative inspiration instantly. Spin to choose a movie genre or picker, get random drawing ideas, spin an arrow pointer, or get TBR book prompts.',
    title: 'Creative & Entertainment Decision Wheels | SpinVerse',
    description: 'Unlock creative inspiration instantly. Spin to choose a movie genre or picker, get random drawing ideas, spin an arrow pointer, or get TBR book prompts.',
    wheels: [
      {
        slug: 'movie-picker',
        name: 'Movie Picker Wheel',
        desc: 'Resolve what to watch tonight by spinning movie genres.',
        options: ["Action Blockbuster", "Sci-Fi Thriller", "Comedy Night", "Romantic Drama", "Spooky Horror", "Mind-bending Mystery", "Historical Epic", "Animated Classic", "Indie Masterpiece"],
        pitch: 'Can\'t decide what film to put on Netflix? Spin this movie picker to pick a movie genre and save hours of searching.',
        faqs: [{ q: 'Can I add specific movie titles?', a: 'Yes! Replace genres with your actual watchlist names in the editor.' }]
      },
      {
        slug: 'drawing-idea-wheel',
        name: 'Drawing Idea Wheel',
        desc: 'Generate weird, cute, and funny prompts for your next sketch.',
        options: ["A cat wearing a wizard hat", "A futuristic cyberpunk cafe", "A treehouse floating in space", "A medieval knight riding a turtle", "A cute dragon baking cookies", "A steampunk robot flower shop"],
        pitch: 'Beat artists\' block. Get random, imaginative concepts to draw and sketch in your notebook.',
        faqs: [{ q: 'Is it good for speed-drawing challenges?', a: 'Yes, spin a prompt and set a 5-minute timer!' }]
      },
      {
        slug: 'arrow-spin',
        name: 'Arrow Spin Wheel',
        desc: 'Spin a compass pointer to pick a random cardinal or ordinal direction.',
        options: ["North ⬆️", "Northeast ↗️", "East ➡️", "Southeast ↘️", "South ⬇️", "Southwest ↙️", "West ⬅️", "Northwest ↖️"],
        pitch: 'Spin to pick directions. Great for navigation games, choose-your-own-adventure routes, or outdoor activities.',
        faqs: [{ q: 'Does it act as a compass?', a: 'It picks directions mathematically, acting as a random directional guide.' }]
      },
      {
        slug: 'tbr-prompts',
        name: 'TBR Prompts Wheel',
        desc: 'Select your next book reading choice using To-Be-Read (TBR) prompts.',
        options: ["A book with a blue cover", "A book that was recommended by a friend", "A book that has been on your shelf over 1 year", "A thriller or mystery", "A book by a female author", "A book with an animal in it"],
        pitch: 'Fulfill your reading challenges. Settle on your next TBR shelf pick without overthinking.',
        faqs: [{ q: 'Does it support Goodreads lists?', a: 'Copy-paste titles directly from your reading lists for personalized picks.' }]
      },
      {
        slug: 'music-genre-wheel',
        name: 'Music Genre Wheel',
        desc: 'Spin to pick what music style to play or research.',
        options: ["Synthwave / Lo-Fi", "Classic Rock & Roll", "90s Hip Hop", "Neo-Classical Piano", "Modern Pop", "Smooth Jazz", "Indie Folk & Acoustic", "Heavy Metal / Hard Rock", "Electronic Dance Music"],
        pitch: 'Bored of the same playlist loop? Spin to explore new genres, artists, and music stations.',
        faqs: [{ q: 'Can I add specific artists?', a: 'Yes, input your favorite singers or bands in the editor.' }]
      }
    ]
  },
  'animal-wheels': {
    name: 'Animals & Nature',
    icon: 'Rabbit',
    bgColor: 'bg-retro-mint',
    href: '/animal-wheels/',
    desc: 'Select random animals for games, education, and drawings. Spin the animal wheels to discover what animal you are or pick farm creatures.',
    title: 'Animal & Nature Randomizer Wheels | SpinVerse',
    description: 'Select random animals for games, education, and drawings. Spin the animal wheels to discover what animal you are or pick farm creatures.',
    wheels: [
      {
        slug: 'random-animal-generator',
        name: 'Random Animal Generator Wheel',
        desc: 'Spin to get a random wild animal. Preloaded with majestic land and sea beasts.',
        options: ["Lion", "Tiger", "Dolphin", "Elephant", "Kangaroo", "Panda", "Penguin", "Wolf", "Grizzly Bear", "Chimpanzee", "Eagle", "Sloth"],
        pitch: 'Pick random animals for science projects, drawings, charades, or trivia contests.',
        faqs: [{ q: 'Can I add insects or dinosaurs?', a: 'Yes, add bugs, birds, or prehistoric beasts in the options.' }]
      },
      {
        slug: 'what-animal-are-you',
        name: 'What Animal Are You Wheel',
        desc: 'Discover your spiritual animal personality with this fun spirit animal wheel.',
        options: ["A wise Owl", "A loyal Golden Retriever", "A playful Cat", "A lazy Panda", "A soaring Eagle", "A fast Cheetah", "A calm Sea Turtle", "A busy Bee", "A brave Lion"],
        pitch: 'Run personality icebreakers. Find your spirit animal archetype based on a random decision spin.',
        faqs: [{ q: 'Is this based on science?', a: 'No, this is a fun personality game designed for entertainment.' }]
      },
      {
        slug: 'farm-animals-wheel',
        name: 'Farm Animals Wheel',
        desc: 'Spin to pick typical barnyard and farm animals. Excellent for toddler learning.',
        options: ["Dairy Cow", "Woolly Sheep", "Pink Pig", "Galloping Horse", "Clucking Chicken", "Quacking Duck", "Billy Goat", "Fluffy Llama", "Farm Dog"],
        pitch: 'Teach children farm sounds and animal names. Integrate it into interactive elementary classroom games.',
        faqs: [{ q: 'Are sounds included?', a: 'The spinner plays a clean ticking sound, make the animal noises yourself for extra fun!' }]
      }
    ]
  }
};

// Helper function to create page content
function generateWheelPageCode(categoryKey, wheel, categoryInfo) {
  const siblingLinks = categoryInfo.wheels
    .filter(w => w.slug !== wheel.slug)
    .slice(0, 3)
    .map(w => `[${w.name}](/${categoryKey}/${w.slug}/)`)
    .join(', ');

  const breadcrumbs = `
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/${categoryKey}/" className="hover:text-retro-orange">${categoryInfo.name}</Link>
          <span>/</span>
          <span className="text-retro-orange">${wheel.name.replace(' Wheel', '')}</span>
        </div>`;

  const optionsJson = JSON.stringify(wheel.options);
  const storageKey = `spinverse-${categoryKey}-${wheel.slug}`;

  // Age gate code for adult truth or dare
  let ageGateState = '';
  let ageGateRenderStart = '';
  let ageGateRenderEnd = '';
  if (wheel.needsAgeGate) {
    ageGateState = `
  const [ageVerified, setAgeVerified] = useState(false);
  useEffect(() => {
    const verified = localStorage.getItem('spinverse-age-verified');
    if (verified === 'true') {
      setAgeVerified(true);
    }
  }, []);

  const verifyAge = () => {
    localStorage.setItem('spinverse-age-verified', 'true');
    setAgeVerified(true);
  };
`;
    ageGateRenderStart = `
        {!ageVerified ? (
          <div className="max-w-md mx-auto my-12 p-8 neo-card bg-retro-yellow text-retro-navy text-center">
            <h2 className="text-3xl font-black mb-4">Age Verification</h2>
            <p className="text-sm font-semibold mb-6">This page contains content suitable only for mature audiences (18+). Click verify to proceed.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={verifyAge} className="px-6 py-3 neo-btn bg-retro-mint font-bold hover:scale-105 transition-transform">I am 18+</button>
              <Link href="/games/" className="px-6 py-3 neo-btn bg-white hover:scale-105 transition-transform">Go Back</Link>
            </div>
          </div>
        ) : (
          <>
`;
    ageGateRenderEnd = `
          </>
        )}
`;
  }

  // Number range config code for number wheel
  let customControls = '';
  let customSpinnerImport = 'import WheelSpinner from "@/components/WheelSpinner";';
  let customSpinnerCall = `<WheelSpinner initialOptions={${optionsJson}} storageKey="${storageKey}" />`;
  
  if (wheel.isNumberWheel || wheel.needsAgeGate) {
    customSpinnerImport = `import WheelSpinner from "@/components/WheelSpinner";
import { useState, useEffect } from "react";`;
  }

  if (wheel.isNumberWheel) {
    customControls = `
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(10);
  const [numOptions, setNumOptions] = useState([]);
  
  useEffect(() => {
    const generated = [];
    const min = Math.min(minVal, maxVal);
    const max = Math.max(minVal, maxVal);
    for (let i = min; i <= Math.min(max, 100); i++) {
      generated.push(String(i));
    }
    setNumOptions(generated);
  }, [minVal, maxVal]);
`;
    customSpinnerCall = `
            <div className="mb-6 max-w-sm mx-auto flex gap-4 p-4 neo-card bg-white dark:bg-retro-navy">
              <div>
                <label className="block text-xs font-black uppercase mb-1">Min Value</label>
                <input type="number" value={minVal} onChange={(e) => setMinVal(Number(e.target.value))} className="w-20 neo-input text-center font-bold" min={0} max={100} />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-1">Max Value</label>
                <input type="number" value={maxVal} onChange={(e) => setMaxVal(Number(e.target.value))} className="w-20 neo-input text-center font-bold" min={1} max={100} />
              </div>
              <div className="flex items-end">
                <span className="text-xs font-bold opacity-75">Range: {minVal}-{maxVal}</span>
              </div>
            </div>
            <WheelSpinner key={numOptions.join(',')} initialOptions={numOptions} storageKey="spinverse-number-wheel-range" />
`;
  }

  const code = `"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
${customSpinnerImport}
import Link from "next/link";
import { ArrowLeft, Play, Sparkles, HelpCircle } from "lucide-react";

export default function ${wheel.name.replace(/[^a-zA-Z]/g, '')}Page() {
${ageGateState}${customControls}
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        ${breadcrumbs}

        {/* Back Link */}
        <Link
          href="/${categoryKey}/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to ${categoryInfo.name}
        </Link>

        ${ageGateRenderStart}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive Preset
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            ${JSON.stringify(wheel.name)}
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            ${JSON.stringify(wheel.desc)}
          </p>
        </section>

        <section className="mb-16">
          ${customSpinnerCall}
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the ${wheel.name}?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                ${JSON.stringify(wheel.pitch)}
              </p>
              <p>
                This spinner is preloaded with popular options to get you started. If you want to customize the list, or narrow it down to just your personal choices, you can easily add, remove, or edit options right in the spinner menu.
              </p>
              <p>
                Explore other tools in this category such as ${siblingLinks || '[Games Hub](/games/)'} or check out the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Hub</Link> directory.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              How to Play & Use Cases
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  Instant Decisions
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the dial, get an instant outcome, and remove analysis paralysis from your day. Ideal for quick games, classroom assignments, and drawing triggers.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  Customize and Share
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Need custom options? You can modify the slice items using the list view or copy-paste directly from spreadsheet programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 font-medium">
            {${JSON.stringify(wheel.faqs || [])}.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-orange">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                How random is the selection?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                The wheel uses a robust pseudo-random number generation algorithm in Javascript, ensuring that every slice has a completely fair, unbiased, and mathematically equal chance of winning.
              </p>
            </div>
          </div>
        </section>
        ${ageGateRenderEnd}
      </main>

      <Footer />
    </>
  );
}
`;
  return code;
}

// Helper function to generate category page (hub page)
function generateCategoryHubCode(categoryKey, categoryInfo) {
  const wheelLinks = categoryInfo.wheels.map(w => {
    return `    { name: ${JSON.stringify(w.name)}, href: ${JSON.stringify('/' + categoryKey + '/' + w.slug + '/')}, desc: ${JSON.stringify(w.desc)} }`;
  }).join(',\n');

  const code = `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: ${JSON.stringify(categoryInfo.title)},
  description: ${JSON.stringify(categoryInfo.description)},
};

export default function ${categoryKey.replace(/[^a-zA-Z]/g, '')}HubPage() {
  const wheels = [
${wheelLinks}
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">${categoryInfo.name}</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            ${categoryInfo.name}
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            ${categoryInfo.desc}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {wheels.map((w) => (
            <div key={w.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{w.name}</h3>
                <p className="text-sm opacity-80 mb-6">{w.desc}</p>
              </div>
              <Link
                href={w.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Launch Wheel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
`;
  return code;
}

// Perform generation
for (const [catKey, catInfo] of Object.entries(categories)) {
  const catFolder = path.join(appDir, catKey);
  if (!fs.existsSync(catFolder)) {
    fs.mkdirSync(catFolder, { recursive: true });
  }

  // Create Category Hub Page
  const hubPagePath = path.join(catFolder, 'page.tsx');
  fs.writeFileSync(hubPagePath, generateCategoryHubCode(catKey, catInfo), 'utf-8');
  console.log(`Generated category hub: ${hubPagePath}`);

  // Create individual wheel pages
  for (const wheel of catInfo.wheels) {
    const wheelFolder = path.join(catFolder, wheel.slug);
    if (!fs.existsSync(wheelFolder)) {
      fs.mkdirSync(wheelFolder, { recursive: true });
    }
    const wheelPagePath = path.join(wheelFolder, 'page.tsx');
    fs.writeFileSync(wheelPagePath, generateWheelPageCode(catKey, wheel, catInfo), 'utf-8');
    console.log(`Generated wheel page: ${wheelPagePath}`);
  }
}
