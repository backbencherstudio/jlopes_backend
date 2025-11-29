import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const teamSeedData = [

  {
    name: "Erik Ranberg",
    title: "Certified Federal Retirement Consultant",
    description: `Erik Ranberg, Certified Federal Retirement Consultant (FRCSM) and Marine Veteran, has a unique ability to cut through the "fancy speak" and help you understand the complexity of your Federal Benefits. Erik has over 20 years of experience in the retirement arena assisting public servants at the Federal, State, Municipal and Educator levels. Erik assists Federal Employees complete their retirement and disability applications, provides guidance to project and plan retirement income, establish multi-pension/income streams, and avoid the tax traps that many retirees often fall victim to. Whether you become a client or not, you will walk away with a thorough, clear, and easy to understand knowledge with respect to your individual retirement wishes. Erik's unique background which includes the US Marines, the utility construction industry and then financial services provides a "no pressure, nothing to sell you" common sense approach you will enjoy.`,
    avatar: "member-001.png",
    socialLinks: {
      facebook: "https://facebook.com/erikranberg",
      twitter: "https://twitter.com/erikranberg",
      instagram: "https://instagram.com/erikranberg",
    },
  },
  {
    name: "Brandon Halsey",
    title: "Public Sector Retirement Director",
    description:
      "A former professional MMA athlete, Brandon learned early the value of discipline, strategy and resilience— qualities he now brings to financial planning. With over a decade of experience guiding state and federal employees as well as individuals and families, he combines his competitive edge with deep industry expertise to craft tailored retirement, investment, and insurance solutions. Whether you're navigating public-sector pensions, building a secure legacy for your loved ones, or managing risk in uncertain markets, Brandon's hands- on approach and unwavering commitment ensure you have a champion in your corner—fighting tirelessly for your financial future.",
    avatar: "member-002.png",
    socialLinks: {
      facebook: "https://facebook.com/brandonhalsey",
      twitter: "https://twitter.com/brandonhalsey",
      instagram: "https://instagram.com/brandonhalsey",
    },
  },
  {
    name: "Luz Bermudez",
    title: "Retired Chemical Engineer/Public Sector Retirement Analyst",
    description:
      "Luz M. Bermudez, boasting a stellar Bachelor of Science in Chemistry. Her illustrious career began as a Chemical Engineer at a top global oilfield service company before transitioning into the financial industry over 14 years ago. As a licensed professional in 18 states, she empowers state and federal employees to discover additional savings options for their retirement, showcasing her commitment to financial excellence. Beyond her professional endeavors, Luz indulges in her passions for travel, quality time with family, gourmet cuisine, and maintaining a healthy lifestyle through regular exercise. Her fluency in two languages further exemplifies her versatility and cultural appreciation.",
    avatar: "member-003.png",
    socialLinks: {
      facebook: "https://facebook.com/luzbermudez",
      twitter: "https://twitter.com/luzbermudez",
      instagram: "https://instagram.com/luzbermudez",
    },
  },
  {
    name: "Stephen Jeung",
    title: "Title: Public Sector Retirement Director",
    description:
      "Stephen Jeung is a financial professional with over 20 years of experience helping individuals,families, and business owners build and protect their wealth. A graduate of the University of California, Berkeley, he began his career as a Wealth Advisor at Merrill Lynch's Silicon Valley office. Today, he specializes in life insurance, 403(b)/457 retirement planning, fixed indexed annuities, and wealth management—offering personalized strategies tailored to each client's goal",
    avatar: "member-004.png",
    socialLinks: {
      facebook: "https://facebook.com/stephenjeung",
      twitter: "https://twitter.com/stephenjeung",
      instagram: "https://instagram.com/stephenjeung",
    },
  },

  // 2nd ---
  {
    name: "Maria Renteria",
    title: "Public Sector Benefits Advisor",
    description:
      "Maria, is an innovative leader spearheading transformation in Las Vegas, a city synonymous with opportunities and financial prosperity. As the driving force behind Freedom 2 Retire (Las Vegas), she leads a dedicated team of entrepreneurs in delivering essential education, wealth protection, and financial growth strategies to families and business owners. In her leisure time, she enjoys travel, fitness pursuits, and quality moments with her cherished daughter.",
    avatar: "member-005.png",
    socialLinks: {
      facebook: "https://facebook.com/mariarenteria",
      twitter: "https://twitter.com/mariarenteria",
      instagram: "https://instagram.com/mariarenteria",
    },
  },
  {
    name: "Bobby Szwaja",
    title: "Public Sector Retirement Analyst",
    description:
      "Meet Bobby Szwaja, over the past 19 years since graduating from the University of VT w a double major in Business and Economics, I have established myself as a dynamic professional in the financial services industry. Having served as a VP in Sales. I have excelled in cultivating client relationships and providing strategic investment planning services resulting in substantial returns for clients. I consistently have delivered top-tier results becoming a top producer within my organizations and overseeing large-scale operations. Recognized numerous times for my exceptional performance I have been blessed to receive numerous awards & honors throughout my career. Outside of work, I have a deep passion for my family and I am a devoted father of my 6 year old son. I am fluent in english/Polish language, former 4 sport athlete with a tremendous love for sport, devoted to maintaining a healthy lifestyle and travel the World in my spare time. My mission is to help my clients achieve their financial goals, plan for a fruitful retirement and protect their family",
    avatar: "member-006.png",
    socialLinks: {
      facebook: "https://facebook.com/bobbyszwaja",
      twitter: "https://twitter.com/bobbyszwaja",
      instagram: "https://instagram.com/bobbyszwaja",
    },
  },
  {
    name: "Jason Felix",
    title: "Public Sector Retirement Analyst",
    description:
      "Jason Felix is a dedicated Life Insurance Financial Advisor with over a decade of experience in helping individuals and families secure their financial future. Specializing in customized life insurance solutions, Jason is committed to providing expert guidance and support tailored to each client's unique needs. His comprehensive approach ensures that clients make informed decisions to protect their loved ones and achieve financial stability. Jason Felix is a licensed professional advisor in 32 states. He is known for his integrity, client-focused service, and a passion for helping others achieve peace of mind through sound financial planning.",
    avatar: "member-007.png",
    socialLinks: {
      facebook: "https://facebook.com/jasonfelix",
      twitter: "https://twitter.com/jasonfelix",
      instagram: "https://instagram.com/jasonfelix",
    },
  },
  {
    name: "Lashaka Pleasant-Davis",
    title: "Public Sector Benefits Advisor",
    description:
      "LaShaka Pleasant-Davis is a thriving wife and mother who has a genuine love for people. She has been a medical professional for over 25 years. Being faced with the loss of her only sister to a rare cancer in 2009 and her father to a massive heart attack in 2011, LaShaka made a solemn vow to impart the vital lesson learned: the significance of having one's financial affairs in order. She is committed to empowering families and businesses with the financial wisdom to conquer the overwhelming burden and stress that is caused by procrastination and lack of planning. She continues to share financial services as beacon of hope and is on a mission to share the resources required to earn financial freedom and build generational wealth. In 2020, during the pandemic, LaShaka founded Charmed & Chosen Inc. A 501c3 Youth Non-profit structured to equip and empower under served youth and young adults with the life skills and tools needed to be successful and navigate the challenges faced in the real world. History was made in March 2024, with the grand opening of the C&C Empowerment Center. She is extremely passionate about bridging the inter generational gaps to ensure that families are thriving mentally, emotionally and financially. LaShaka is a true professional committed to making the world a better place while helping to change the lives of all she encounters by sharing the importance of Protecting What You Love Most with Financial Services.",
    avatar: "member-008.png",
    socialLinks: {
      facebook: "https://facebook.com/lashakapleasantdavis",
      twitter: "https://twitter.com/lashakapleasantdavis",
      instagram: "https://instagram.com/lashakapleasantdavis",
    },
  },

  // 3rd ---
  {
    name: "Trisha Ayers",
    title: "Public Sector Benefits Advisor",
    description:
      "Committed to helping individuals and families protect what matters most while pursuing financial freedom, I provide tailored financial planning, insurance solutions, and practical education. My approach empowers clients to live with purpose, make informed decisions, and achieve a confident retirement.",
    avatar: "member-009.png",
    socialLinks: {
      facebook: "https://facebook.com/cieraslyton",
      twitter: "https://twitter.com/cieraslyton",
      instagram: "https://instagram.com/cieraslyton",
    },
  },
  {
    name: "Bobby Burris",
    title: "Public Sector Pension Analyst",
    description:
      "As a dedicated agent, I have a heart for doing what's right for my clients with the utmost integrity.When the world says to go this way I make sure you're taken care of every time because my faith in Jesus Christ requires it.",
    avatar: "member-010.png",
    socialLinks: {
      facebook: "https://facebook.com/bobbyburris",
      twitter: "https://twitter.com/bobbyburris",
      instagram: "https://instagram.com/bobbyburris",
    },
  },
  {
    name: "Ciera Slyton",
    title: "Public Sector Benefits Advisor",
    description:
      "I am Ciara Slayton, a finance professional with a deep-rooted passion for assisting individuals in achieving their financial goals. Throughout my career, I have witnessed the profound impact that sound financial planning can have on families and business professionals. My dedication to providing clarity in navigating complex financial situations and fostering a sense of security has driven me to continuously expand my knowledge and expertise in the field. My journey led me here, a company where I found a community aligned with my values and dedicated to empowering others through financial education and strategic planning. I am honored to be a part of a team that prioritizes growth, development, and making a positive impact in the lives of our clients and colleagues. Here, I am committed to building lasting relationships based on trust, transparency, and mutual respect. I approach each client's financial journey with dedication, aiming not only to help them achieve their goals but also to create strategies that align with their aspirations and values. I am grateful for the opportunity to contribute meaningfully to the financial well-being of others and look forward to connecting with you to discuss how I can support you in preparing for your financial future.",
    avatar: "member-011.png",
    socialLinks: {
      facebook: "https://facebook.com/cieraslyton",
      twitter: "https://twitter.com/cieraslyton",
      instagram: "https://instagram.com/cieraslyton",
    },
  },
  {
    name: "Alma Delia Pavon",
    title: "Public Sector Benefits Associate",
    description:
      "I specialize in individual and family life insurance with living benefits, indexed interest savings, and annuities geared toward retirement planning. My purpose is to help people protect local & state employees with their financial well-being, guiding them toward smart decisions that allow them to protect their lives and grow their money safely and tax-free. I work with a firm commitment: the client's needs always come before anything. I deeply believe in providing clear, accessible, and personalized guidance, especially to families in my community seeking protection and building a more stable future.",
    avatar: "member-012.png",
    socialLinks: {
      facebook: "https://facebook.com/biancamaravilla",
      twitter: "https://twitter.com/biancamaravilla",
      instagram: "https://instagram.com/biancamaravilla",
    },
  },

  // 4th
  {
    name: "Myishia Johnson",
    title: "Teacher/Public Sector Benefits Associate",
    description:
      "Myishia Johnson is a loving mother with a passion for helping others. Her deep love for children and families inspired her to look beyond education and into the world of financial protection. This journey gave her peace of mind, knowing she could help families grow financially and secure the protection they deserve.Like many educators, she discovered gaps in her own retirement plan and realized how many working families face similar challenges. While she continues to make a difference in the classroom everyday, Myishia is now just as passionate about empowering families and fellow educators to become financially free and better prepared for life's uncertainties.",
    avatar: "member-013.png",
    socialLinks: {
      facebook: "https://facebook.com/myishiajohnson",
      twitter: "https://twitter.com/myishiajohnson",
      instagram: "https://instagram.com/myishiajohnson",
    },
  },
  {
    name: "Bertha Morales",
    title: "Public Sector Benefits Associate",
    description:
      "My name is Bertha Morales. I am an entrepreneurial Life Insurance Agent dedicated to serving the Hispanic community with integrity, empathy, and commitment. I have a deep understanding of the financial needs of Latino families, offering them personalized solutions that protect their future. I support the Hispanic community in building financial security with a warm and accessible approach, serving as a trusted ally on the path to stability and well-being for each client's family.",
    avatar: "member-014.png",
    socialLinks: {
      facebook: "https://facebook.com/berthamorales",
      twitter: "https://twitter.com/berthamorales",
      instagram: "https://instagram.com/berthamorales",
    },
  },
  {
    name: "Angela Thompson",
    title: "Public Sector Benefits Advisor",
    description:
      "Angela Thompson — Your Trusted Retirement Partner Retirement isn't just about numbers—it's about peace of mind, security, and the ability to enjoy life  on your terms. With years of experience in retirement planning and wealth management, Angela Thompson has dedicated her career to helping individuals and families create financial strategies that support their dreams. What sets Angela apart is her empathetic, client-first approach. She understands that every financial journey is unique, which is why she takes the time to listen, understand, and craft a plan tailored specifically to each client's goals, lifestyle, and concerns. Whether it's maximizing retirement income, protecting assets from market volatility, or ensuring a comfortable legacy, Angela provides clear, actionable solutions that bring confidence and security. Angela has helped countless clients transition into retirement without fear of running out of money, ensuring they have the financial resources to live comfortably and stress-free. She believes that financial confidence isn't just about wealth—it's about knowing you're prepared for whatever the future holds. Beyond her work, Angela finds joy in giving back to her community, spending time with family, and recharging in nature. She understands that a fulfilling retirement is about more than just finances— its about living a life that brings joy and fulfillment. If you're looking for a trusted advisor who truly cares about your future, Angela is here to guide you every step of the way. Let's create a plan that allows you to retire with confidence. security, and the freedom to enjoy what matters most.",
    avatar: "member-015.png",
    socialLinks: {
      facebook: "https://facebook.com/angelathompson",
      twitter: "https://twitter.com/angelathompson",
      instagram: "https://instagram.com/angelathompson",
    },
  },
  {
    name: "Leticia Reyes",
    title: "Public Sector Pension Strategist",
    description:
      "My name is Leticia Reyes and I am a financial professional in the industry. I have a passion for empowering individuals and families to achieve their financial goals. specializing in comprehensive financial planning, investment, and retirement strategies. I am dedicated to providing personalized advice tailored to each client's unique needs and aspirations. building long-term relationships based on trust, transparency, and integrity. Outside Of work, I enjoy exploring diverse cultures through travel. meeting new people, and earning about their traditions. This enriches my ability to connect with clients on a personal level. In addition. I have hobbies such as snowboarding and playing piano. I find joy in hitting the slopes during winter seasons, finding parallels between the discipline of financial planning and the challenges of the sport. Playing piano allows me to find solace and creativity, enhancing my ability to balance analytical thinking with artistic expression.",
    avatar: "member-016.png",
    socialLinks: {
      facebook: "https://facebook.com/leticiareyes",
      twitter: "https://twitter.com/leticiareyes",
      instagram: "https://instagram.com/leticiareyes",
    },
  },

  // 5th
  {
    name: "Bajes Shakta",
    title: "Public Sector Retirement Analyst",
    description:
      "Bajes Shakta is an experienced insurance agent with three years in the industry. After successfully running several businesses, Bajes faced the challenges brought on by COVID-19, leading to the closure of three ventures. This experience highlighted the need for a recession-proof career, prompting a transition to insurance. Passionate about helping others, Bajes takes pride in guiding clients through their retirement planning, ensuring they have the security they deserve. In addition to professional pursuits, Bajes is dedicated to giving back to the community through volunteer work, embodying a commitment to service and support.",
    avatar: "member-017.png",
    socialLinks: {
      facebook: "https://facebook.com/biancamaravilla",
      twitter: "https://twitter.com/biancamaravilla",
      instagram: "https://instagram.com/biancamaravilla",
    },
  },
  {
    name: "Wendy Salazar",
    title: "Public Sector Benefits Advisor",
    description:
      "With 6 years of experience in the insurance and financial services industry, Wendy is a trusted advisor dedicated to helping individuals, families, and business owners secure their financial futures. As a licensed life insurance agent and financial professional, she specializes in tailoring protection and planning strategies that align with each client's unique goals and stage of life. Over the past five years, she has successfully helped clients: • Protect loved ones with customized life insurance solutions • Plan for retirement with long-term financial strategies • Preserve wealth and minimize risk through comprehensive financial planning Wendy is licensed in many states and regularly participates in continuing education to stay current with industry trends, regulations, and innovative solutions.",
    avatar: "member-018.png",
    socialLinks: {
      facebook: "https://facebook.com/wendysalazar",
      twitter: "https://twitter.com/wendysalazar",
      instagram: "https://instagram.com/wendysalazar",
    },
  },
  {
    name: "Dalia Cano",
    title: "Nurse Practitioner/Public Sector Benefits Advisor",
    description:
      "Leveraging 30+ years in healthcare and 12 years as a licensed agent, I bring unique insight into the vital importance of planning for life's later chapters. My mission is to help individuals and families safeguard their peace of mind as retirement approaches. Witnessing the challenges of unpreparedness fuels my commitment to guiding clients through complex decisions about retirement income and long-term care. I believe personalized, compassionate planning isn't just a service—it's the foundation for a confident and secure future.",
    avatar: "member-019.png",
    socialLinks: {
      facebook: "https://facebook.com/biancamaravilla",
      twitter: "https://twitter.com/biancamaravilla",
      instagram: "https://instagram.com/biancamaravilla",
    },
  },
  {
    name: "Kamara M. Bowen",
    title: "Public Sector Benefits Associate",
    description: `Kamara Magnolia Bowen is a dedicated mother of two, passionately committed to building a lasting legacy through faith, financial empowerment, and personal freedom. With a strong focus on securing families' futures, she provides trusted electronic/mobile notary services" and "life insurance solutions designed to protect and empower her clients. Her work reflects a deep commitment to education, service, and ensuring that families have the tools they need to thrive. Through her professional expertise, she helps individuals navigate critical financial and legal decisions with confidence and peace of mind.`,
    avatar: "member-020.png",
    socialLinks: {
      facebook: "https://facebook.com/luzbermudez",
      twitter: "https://twitter.com/luzbermudez",
      instagram: "https://instagram.com/luzbermudez",
    },
  },

  // 6th
  {
    name: "Louie Gamboa",
    title: "Public Sector Benefits Advisor",
    description:
      "Louie Gamboa is state licensed and is dedicated to helping families and individuals achieve financial security. Driven by a passion for empowering others, Louie's journey into financial advising began after witnessing the challenges his own immigrant family faced navigating retirement. He understands the complexities of financial planning and strategies to make the process clear and accessible for his clients. With years of experience specializing in Annuities, Mutual funds, retirement planning, investment strategies, IRA, 401k and Index Universal Life policies. Louie is committed to building lasting relationships and providing tailored solutions that align with each client's unique needs and aspirations. Beyond his professional expertise, Louie enjoys spending time outdoors with his family and is actively involved in his local community. He believes in giving back and volunteers his time with the IXEL Foundation",
    avatar: "member-021.png",
    socialLinks: {
      facebook: "https://facebook.com/louiegamboa",
      twitter: "https://twitter.com/louiegamboa",
      instagram: "https://instagram.com/louiegamboa",
    },
  },
  {
    name: "Juan Guido",
    title: "Public Sector Benefits Advisor",
    description:
      "With over 12 years of experience in the insurance and financial services industry. I am passionate about helping individuals and families protect what matters most. My mission is to provide strategic solutions that not only safeguard against financial loss but also empower clients to build and leave a lasting legacy.  In addition to my financial services work. I bring 27 years of experience in the fitness and wellness industry. Throughout my career. I've been committed to guiding people toward healthier. more fulfilling lives—both physically and mentally! My holistic approach combines wellness and wealth- building, allowing me to support clients in reaching their full potential in every aspect of life. I am dedicated to making a positive, lasting impact!",
    avatar: "member-022.png",
    socialLinks: {
      facebook: "https://facebook.com/louiegamboa",
      twitter: "https://twitter.com/louiegamboa",
      instagram: "https://instagram.com/louiegamboa",
    },
  },
  {
    name: "Elena Sargazyan",
    title: "Nurse/Public Sector Benefits Advisor",
    description:
      "With a diverse background spanning software QA engineering and nursing, I bring a meticulous eye for detail and a passion for precision to the financial services industry. My 6+ years of experience in quality assurance—testing complex web and mobile applications, APIs, and financial systems—has  honed my ability to identify risks, ensure compliance, and deliver flawless user experiences. Multilingual (English, Persian, Assyrian, Turkish, Azerbaijani), enabling clear communication with global teams and clients. I hold a Life and Health Insurance License, furthering my dedication to helping individuals secure their futures—both digitally and financially. ",
    avatar: "member-023.png",
    socialLinks: {
      facebook: "https://facebook.com/louiegamboa",
      twitter: "https://twitter.com/louiegamboa",
      instagram: "https://instagram.com/louiegamboa",
    },
  },
  {
    name: "Bianca Maravilla",
    title: "Public Sector Pension Strategist",
    description:
      "As a former healthcare professional with over a decade of experience, I've dedicated my career to helping people navigate life's most critical moments with care and clarity. From guiding patients through complex medical decisions to streamlining processes for better outcomes, I've honed a deep ability to listen, problem-solve, and build trust under pressure. Now, I'm bringing that same human-centered approach to financial services, where I'm passionate about empowering individuals and families to achieve their financial goals with confidence.My transition to finance is rooted in a personal realization: just as health impacts quality of life, so does financial well-being. I understand the weight of big decisions—whether it's planning for retirement, saving for a child's future, or navigating unexpected challenges. Drawing on my expertise in clear communication and analytical thinking, I'm committed to demystifying the complexities of finance and creating tailored solutions that resonate on a personal level.Outside of work, I'm a parent, a community volunteer, a gym enthusiast, and an avid learner who thrives on connecting with people from all walks of life. These experiences ground me in the belief that every financial plan should reflect the unique story and aspirations of the person behind it. Let's work together to build a future that feels as secure as it is inspiring.",
    avatar: "member-024.png",
    socialLinks: {
      facebook: "https://facebook.com/louiegamboa",
      twitter: "https://twitter.com/louiegamboa",
      instagram: "https://instagram.com/louiegamboa",
    },
  },

  // 7th
  {
    name: "Ernesto Gonzalez",
    title: "Educator/Public Sector Retirement Analyst",
    description:
      "Ernesto Gonzalez is a seasoned financial professional with over 40 years of experience helping clients build secure, fulfilling lives. Licensed in 17 states, he specializes in strategic planning for tax- free retirement, empowering individuals and families to achieve financial freedom with confidence and clarity. A graduate of Santa Clara University with a degree in Social Studies, Ernesto also holds a teaching credential from San Jose State University. His lifelong commitment to education and service is reflected not only in his financial practice but also in his ministry work. He earned an Associate of Arts in Ministry from Life Bible College and has served in the mission field in Mexico and Colombia. Ernesto's heart for people extends beyond finance. He founded a ministry in partnership with a women's shelter in Boise, Idaho, where he continues to support and uplift those in need. His unique blend of financial expertise, global perspective, and compassionate leadership makes him a trusted advisor and advocate for holistic well-being.",
    avatar: "member-025.png",
    socialLinks: {
      facebook: "https://facebook.com/biancamaravilla",
      twitter: "https://twitter.com/biancamaravilla",
      instagram: "https://instagram.com/biancamaravilla",
    },
  },
  {
    name: "Karla Alejandro",
    title: "Public Sector Benefits Advisor",
    description:
      "Karla Alejandro helps turn uncertainty into security, with an unwavering commitment to her local public servants. She provides tailored strategies that build financial security, preserve wealth, and create lasting legacies. With expertise, empathy, and dedication, she ensures those who serve our communities have the support they deserve-because it truly matters. Bilingual in English and Spanish, she connects with a diverse range of clients. Outside of her professional work, she actively volunteers with nonprofit organizations in her community, continuing her mission of service beyond the office.",
    avatar: "member-026.png",
    socialLinks: {
      facebook: "https://facebook.com/bobbyburris",
      twitter: "https://twitter.com/bobbyburris",
      instagram: "https://instagram.com/bobbyburris",
    },
  },

  {
    name: "Nina Rankine",
    title: "Public Sector Retirement Analyst",
    description:
      "Nina Rankine has been working in the corporate ecosystem for over 22 years. She is versed with more than 20 years of experience in Human Resources. Working for both Fortune 500 and Fortune 50 companies, in addition to start up environments, she is very versed in the people services industry and HR vertical. In such environments she has worked with all members of staff, at a grass- roots level, as well at the Corporate and Executive level. She is licensed in more than 20 plus US states, and is more than happy and is quite pleased, to help you with your retirement, needs.",
    avatar: "member-027.png",
    socialLinks: {
      facebook: "https://facebook.com/biancamaravilla",
      twitter: "https://twitter.com/biancamaravilla",
      instagram: "https://instagram.com/biancamaravilla",
    },
  },
  {
    name: "Matthew Antisdel",
    title: "Title: Public Sector Benefits Advisor",
    description:
      "With a passion for helping individuals and families achieve financial peace of mind, Matthew likes to specialize in retirement planning and insurance solutions tailored to each client's unique set of goals. Drawing on years of experience in the insurance and financial services industry, Matthew will try to empower clients to build secure, sustainable retirement strategies through smart risk management and personalized guidance specializing in Life Insurance & Annuities. Whether you're planning for early retirement or navigating life insurance options, I'm committed to making the journey clear, confident, and stress-free. While I love to help people in the public sector industry, in my spare time I still like to get on soccer fields and referee youth and high school soccer which I've done for 19 years now.",
    avatar: "member-028.png",
    socialLinks: {
      facebook: "https://facebook.com/bobbyburris",
      twitter: "https://twitter.com/bobbyburris",
      instagram: "https://instagram.com/bobbyburris",
    },
  },
];

console.log("Seeding users...");
async function main() {
  for (const item of teamSeedData) {
    await prisma.team.create({
      data: {
        name: item.name,
        title: item.title,
        description: item.description,
        avatar: item.avatar,   
        socialLinks: item.socialLinks,
      },
    });
  }

  console.log("Team members seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
