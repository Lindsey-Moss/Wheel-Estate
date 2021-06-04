const db = require('../db')
const { Spot } = require("../models");

const main = async () => {
 const spots = [
  {
    "title": "TEST LISTING 1",
    "owner_name": "Test Person 1",
    "owner_email": "fake@email.com",
    "price": 950.00,
    "available_spots": 1,
    "size_length": 10,
    "size_width": 10,
    "utilities": "none",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim erat, mattis lacinia efficitur eget, varius a urna. Morbi sodales magna metus, et tempor nisl egestas non. Nulla lacinia ornare purus, non mattis mauris placerat vitae. Vivamus tempus convallis lacus, sit amet pulvinar tellus lobortis nec. Cras blandit eros quis dapibus cursus. Sed vitae mauris non justo bibendum rutrum. Aenean eget ex et eros scelerisque pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet pulvinar eros. Curabitur eget cursus risus. Cras tempor consectetur feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu feugiat sapien. Aliquam tempor velit et nulla suscipit tincidunt. Proin in auctor turpis. Nam nec mollis ligula. Curabitur fermentum cursus mauris ac vestibulum. Mauris eros justo, gravida at ante tempor, faucibus ornare purus. Nunc convallis odio at ipsum lacinia faucibus. In a mauris sit amet mi mollis malesuada. Donec et est eget nibh fringilla molestie. Nullam consectetur libero elit. Proin quis est facilisis, volutpat urna et, tristique ligula. In sagittis, lorem et vehicula ullamcorper, risus quam convallis neque, sit amet laoreet risus nisl quis tellus. Donec ut nisi felis. Mauris cursus lorem turpis, ac dignissim velit placerat quis. Proin augue dolor, commodo nec risus sit amet, luctus sollicitudin ante. Donec eget purus et eros dapibus ornare. Sed aliquet lobortis lacus, vel posuere libero facilisis in. Vestibulum accumsan, lacus ut venenatis vestibulum, arcu tortor lobortis nunc, vitae facilisis dui ex id quam. Integer vel mi facilisis, ultricies nulla ut, sollicitudin arcu. Aliquam suscipit iaculis tincidunt. Quisque tincidunt, neque ut sagittis vehicula, massa nibh pulvinar sapien, et elementum leo metus sed purus. Cras posuere ante dictum pretium blandit. Nulla vitae nulla vitae sem cursus pellentesque. Sed feugiat ornare augue, ut ullamcorper purus mattis a. Aenean tellus nisl, accumsan vel maximus in, gravida ac risus. Vivamus aliquet risus purus, ac egestas sem dictum ac. Vestibulum scelerisque ut metus eget sagittis. Nam interdum lorem in pharetra tristique. Phasellus sagittis ullamcorper sapien eu porta. Sed eleifend eget neque congue laoreet. Nulla id tellus risus. Ut a justo ac tellus finibus fringilla. Vestibulum posuere diam nibh, at tincidunt ante accumsan sed. Sed volutpat, lacus eget congue eleifend, ex mauris sodales eros, a mattis est sapien in mauris. Praesent et lectus fringilla massa tincidunt laoreet. Donec bibendum orci convallis pretium commodo. Duis orci ipsum, scelerisque nec magna eget, ornare accumsan metus. Ut scelerisque massa sed ex varius, non rhoncus mi scelerisque. Morbi eros diam, luctus at venenatis at, egestas eget mi. Nunc nulla neque, auctor vel erat vel, placerat commodo ligula. Phasellus porta justo vel turpis faucibus, malesuada cursus ante congue. Integer fringilla mi ac luctus hendrerit. In gravida placerat orci, semper ultrices nunc sodales sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a tincidunt nisl.",
    "privacy": "Test string",
    "pets": 'No',
    "location": 80010,
    "image": "https://www.kxan.com/wp-content/uploads/sites/40/2017/09/rainbow-parking-spot_35316482_ver1.0.jpg?w=1200&h=900&crop=1"
  },
  {
    "title": "TEST LISTING 2",
    "owner_name": "Test Person 2",
    "owner_email": "fake@email.com",
    "price": 950.00,
    "available_spots": 1,
    "size_length": 10,
    "size_width": 10,
    "utilities": "none",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim erat, mattis lacinia efficitur eget, varius a urna. Morbi sodales magna metus, et tempor nisl egestas non. Nulla lacinia ornare purus, non mattis mauris placerat vitae. Vivamus tempus convallis lacus, sit amet pulvinar tellus lobortis nec. Cras blandit eros quis dapibus cursus. Sed vitae mauris non justo bibendum rutrum. Aenean eget ex et eros scelerisque pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet pulvinar eros. Curabitur eget cursus risus. Cras tempor consectetur feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu feugiat sapien. Aliquam tempor velit et nulla suscipit tincidunt. Proin in auctor turpis. Nam nec mollis ligula. Curabitur fermentum cursus mauris ac vestibulum. Mauris eros justo, gravida at ante tempor, faucibus ornare purus. Nunc convallis odio at ipsum lacinia faucibus. In a mauris sit amet mi mollis malesuada. Donec et est eget nibh fringilla molestie. Nullam consectetur libero elit. Proin quis est facilisis, volutpat urna et, tristique ligula. In sagittis, lorem et vehicula ullamcorper, risus quam convallis neque, sit amet laoreet risus nisl quis tellus. Donec ut nisi felis. Mauris cursus lorem turpis, ac dignissim velit placerat quis. Proin augue dolor, commodo nec risus sit amet, luctus sollicitudin ante. Donec eget purus et eros dapibus ornare. Sed aliquet lobortis lacus, vel posuere libero facilisis in. Vestibulum accumsan, lacus ut venenatis vestibulum, arcu tortor lobortis nunc, vitae facilisis dui ex id quam. Integer vel mi facilisis, ultricies nulla ut, sollicitudin arcu. Aliquam suscipit iaculis tincidunt. Quisque tincidunt, neque ut sagittis vehicula, massa nibh pulvinar sapien, et elementum leo metus sed purus. Cras posuere ante dictum pretium blandit. Nulla vitae nulla vitae sem cursus pellentesque. Sed feugiat ornare augue, ut ullamcorper purus mattis a. Aenean tellus nisl, accumsan vel maximus in, gravida ac risus. Vivamus aliquet risus purus, ac egestas sem dictum ac. Vestibulum scelerisque ut metus eget sagittis. Nam interdum lorem in pharetra tristique. Phasellus sagittis ullamcorper sapien eu porta. Sed eleifend eget neque congue laoreet. Nulla id tellus risus. Ut a justo ac tellus finibus fringilla. Vestibulum posuere diam nibh, at tincidunt ante accumsan sed. Sed volutpat, lacus eget congue eleifend, ex mauris sodales eros, a mattis est sapien in mauris. Praesent et lectus fringilla massa tincidunt laoreet. Donec bibendum orci convallis pretium commodo. Duis orci ipsum, scelerisque nec magna eget, ornare accumsan metus. Ut scelerisque massa sed ex varius, non rhoncus mi scelerisque. Morbi eros diam, luctus at venenatis at, egestas eget mi. Nunc nulla neque, auctor vel erat vel, placerat commodo ligula. Phasellus porta justo vel turpis faucibus, malesuada cursus ante congue. Integer fringilla mi ac luctus hendrerit. In gravida placerat orci, semper ultrices nunc sodales sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a tincidunt nisl.",
    "privacy": "Test string",
    "pets": 'Yes',
    "location": 80010,
    "image": "https://i.pinimg.com/originals/66/0a/be/660abea1fa401212d51a59aecd6337df.jpg"
  },
  {
    "title": "TEST LISTING 3",
    "owner_name": "Test Person 3",
    "owner_email": "fake@email.com",
    "price": 950.00,
    "available_spots": 1,
    "size_length": 10,
    "size_width": 10,
    "utilities": "none",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim erat, mattis lacinia efficitur eget, varius a urna. Morbi sodales magna metus, et tempor nisl egestas non. Nulla lacinia ornare purus, non mattis mauris placerat vitae. Vivamus tempus convallis lacus, sit amet pulvinar tellus lobortis nec. Cras blandit eros quis dapibus cursus. Sed vitae mauris non justo bibendum rutrum. Aenean eget ex et eros scelerisque pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet pulvinar eros. Curabitur eget cursus risus. Cras tempor consectetur feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu feugiat sapien. Aliquam tempor velit et nulla suscipit tincidunt. Proin in auctor turpis. Nam nec mollis ligula. Curabitur fermentum cursus mauris ac vestibulum. Mauris eros justo, gravida at ante tempor, faucibus ornare purus. Nunc convallis odio at ipsum lacinia faucibus. In a mauris sit amet mi mollis malesuada. Donec et est eget nibh fringilla molestie. Nullam consectetur libero elit. Proin quis est facilisis, volutpat urna et, tristique ligula. In sagittis, lorem et vehicula ullamcorper, risus quam convallis neque, sit amet laoreet risus nisl quis tellus. Donec ut nisi felis. Mauris cursus lorem turpis, ac dignissim velit placerat quis. Proin augue dolor, commodo nec risus sit amet, luctus sollicitudin ante. Donec eget purus et eros dapibus ornare. Sed aliquet lobortis lacus, vel posuere libero facilisis in. Vestibulum accumsan, lacus ut venenatis vestibulum, arcu tortor lobortis nunc, vitae facilisis dui ex id quam. Integer vel mi facilisis, ultricies nulla ut, sollicitudin arcu. Aliquam suscipit iaculis tincidunt. Quisque tincidunt, neque ut sagittis vehicula, massa nibh pulvinar sapien, et elementum leo metus sed purus. Cras posuere ante dictum pretium blandit. Nulla vitae nulla vitae sem cursus pellentesque. Sed feugiat ornare augue, ut ullamcorper purus mattis a. Aenean tellus nisl, accumsan vel maximus in, gravida ac risus. Vivamus aliquet risus purus, ac egestas sem dictum ac. Vestibulum scelerisque ut metus eget sagittis. Nam interdum lorem in pharetra tristique. Phasellus sagittis ullamcorper sapien eu porta. Sed eleifend eget neque congue laoreet. Nulla id tellus risus. Ut a justo ac tellus finibus fringilla. Vestibulum posuere diam nibh, at tincidunt ante accumsan sed. Sed volutpat, lacus eget congue eleifend, ex mauris sodales eros, a mattis est sapien in mauris. Praesent et lectus fringilla massa tincidunt laoreet. Donec bibendum orci convallis pretium commodo. Duis orci ipsum, scelerisque nec magna eget, ornare accumsan metus. Ut scelerisque massa sed ex varius, non rhoncus mi scelerisque. Morbi eros diam, luctus at venenatis at, egestas eget mi. Nunc nulla neque, auctor vel erat vel, placerat commodo ligula. Phasellus porta justo vel turpis faucibus, malesuada cursus ante congue. Integer fringilla mi ac luctus hendrerit. In gravida placerat orci, semper ultrices nunc sodales sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a tincidunt nisl.",
    "privacy": "Test string",
    "pets": 'No',
    "location": 80010,
    "image": "https://www.businessinsider.in/thumb/msid-79725102,width-600,resizemode-4,imgsize-1043859/thelife/news/tiny-house-owners-are-facing-evictions-or-living-under-the-radar-because-their-homes-are-considered-illegal-in-most-parts-of-the-us/img5fc9571d037cbd0018613b64.jpg"
  },
  {
    "title": "Boxwood Tiny Homes",
    "price": 495,
    "image": "https://searchtinyhousevillages.com/wp-content/uploads/participants-database/2021/06/boxwood_cute-300x225.jpeg",
    "privacy": "none",
    "amenities": "water",
    "owner_email": "Dolly_Stroman@gmail.com",
    "owner_name": "Doug Williamson",
    "size_length": 77,
    "size_width": 40,
    "location": 5318,
    "pets": true,
    "available_spots": 2,
    "description": "Boxwood is the first park model tiny home-only community in Llano County, which consists of 1 acre for 8 tiny home spaces and a delightful green space. We’re within walking distance of HEB, a salon, pharmacy, post office, health clinic, coffee shop, gas station, car wash, and about 1/2 mile to Lake LBJ."
  },
  {
    "title": "Oakhill Tiny Farms",
    "price": 300,
    "image": "https://searchtinyhousevillages.com/wp-content/uploads/participants-database/2020/04/orchard-300x225.jpg",
    "privacy": "none",
    "amenities": "None",
    "owner_email": "Moses_Goldner@gmail.com",
    "owner_name": "Chet Upton",
    "size_length": 37,
    "size_width": 23,
    "location": 5777,
    "pets": true,
    "available_spots": 6,
    "description": "We have over 20 lots available for rent with metered electricity, city water, sewage, and high-speed Internet. Laundry facilities available as well as shower houses.The farm has 10 acres of pastures for beef cattle, sheep, and goats, a planned 1+ acre orchard and gardens, as well as a pond and forest land. You're free to roam and use the entire property; we just ask that you don't eat everything!The individual lots will have raised beds for your own gardening and three fruit trees for your enjoyment.Rent/buy one of ours, or bring your own!  Vans/RV's considered for short duration.This really isn't an intentional community, just people that want to live a simpler life and be self-sustaining with access to town.*Stock photos"
  },
  {
    "title": "Mountain Creek Village",
    "price": 29000,
    "image": "https://searchtinyhousevillages.com/wp-content/uploads/participants-database/2020/08/img_3048-300x225.jpg",
    "privacy": "none",
    "amenities": "Water",
    "owner_email": "Luella_Upton83@gmail.com",
    "owner_name": "Valentine Kessler",
    "size_length": 43,
    "size_width": 45,
    "location": 520,
    "pets": true,
    "available_spots": 10,
    "description": "Come home to Mountain Creek Village, a nice quiet and level mountain neighborhood on the outskirts of Andrews in Cherokee county, North Carolina.Mountain Creek Village is the perfect place to bring your Park Model or build your retirement or second home, with a paved road, city water and sewer (tap fee applies) and the noisy trout filled Junaluska creek running through the subdivision.The park currently has several log sided Park Models, as well as some smaller houses. The HOA includes lawn care and there is communal access to the creek. Views of the surrounding mountains make this a truly special community and you are not far from the many outdoor activities that make Western North Carolina a wonderful place to call home.Creek side lots start at $25,000. There are 9 lots availableWood side lots start at $18,000. There are 7 lots availableHOA is $325 a yearHomes must be rustic, cabin style. "
  },
  {
    "title": "Living Miracles Worldwide",
    "price": 0,
    "image": "https://searchtinyhousevillages.com/wp-content/uploads/participants-database/2018/05/livingmiracles1-300x64.png",
    "privacy": "none",
    "amenities": "Internet",
    "owner_email": "Leonard_Beer38@yahoo.com",
    "owner_name": "Myra Stracke",
    "size_length": 48,
    "size_width": 22,
    "location": 3242,
    "pets": false,
    "available_spots": 7,
    "description": "Land Owned by: Non-profit organizationsHousing Comments: Properties are all part of tax exempt, non-profit organizations:nLiving Church Ministries, Inc.nLiving Miracles Holdings CorporationnFoundation for the Awakening MindDecision Making Comments: Three Nonprofit organizations each have Boards: Living Church Ministries, Inc., Living Miracles Holdings Corporation, Foundation for the Awakening MindAdditional Information: Following the Mystical Teachings of Jesus, our approach focuses on the Guidance of the Spirit, which acts as an inner compass allowing the form of the path to be given moment by moment. This is a practical, direct, and single-pointed approach, like A Course In Miracles, where absolutely everything in our daily lives is used for one Purpose: to come to the experience of true freedom. The Spirit meets us where we believe we are, unwinding and taking us deeper and deeper into an expansion of the mind to the awareness that there is no separate self. Stepping stones were Given to gently bring us along the path into the Present moment, where the idea of a path disappears in the release of all concepts and the recognition that there was never anything wrong (and no path to walk on!)nWe live by 2 guidelines: No private thoughts and no people pleasing.nStudy of the book A Course In Miracles can offer a context and the practicality of these guidelines for experiencing healing in mind and inner peace.Following the Mystical Teachings of Jesus, our approach focuses on the Guidance of the Spirit, which acts as an inner compass allowing the form of the path to be given moment by moment. This is a practical, direct, and single-pointed approach, like A Course In Miracles, where absolutely everything in our daily lives is used for one Purpose: to come to the experience of true freedom. The Spirit meets us where we believe we are, unwinding and taking us deeper and deeper into an expansion of the mind to the awareness that there is no separate self. Stepping stones were Given to gently bring us along the path into the Present moment, where the idea of a path disappears in the release of all concepts and the recognition that there was never anything wrong (and no path to walk on!)"
  },
  {
    "title": "Cedar Mountain Campground",
    "price": null,
    "image": "https://searchtinyhousevillages.com/wp-content/plugins/participants-database/ui/no-image.png",
    "privacy": "none",
    "amenities": "electric",
    "owner_email": "Camren_Leannon53@hotmail.com",
    "owner_name": "Mia Koelpin",
    "size_length": 26,
    "size_width": 41,
    "location": 87283,
    "pets": true,
    "available_spots": 9,
    "description": "Welcome to beautiful Northern Virginia. We are located near such landmarks as Monticello, Montpelier, Mt. Vernon, Skyline Drive, Luray Caverns, and only 2 hours to Historic Colonial Williamsburg or Washington, DC. Many Civil War Battlefields, wineries, and Antique Shops are just minuets away. Great Mountain hiking can be found at nearby Old Rag Mountain. Our pavilion is great for social cookouts, bingo or you may rather just relax by the fishing pond. We offer a full range to campers, from rugged tent sites to full hook-ups including Pull-Thru sites for those big rigs. Come and visit us and enjoy the wonderful Virginia Outdoors. Our Specialties:Propane StationTent and RV sitesLong Term site rental availableHistoric Landmarks NearbyLarge Pavilion for social activitiesFishing Pond & Fresh Mt. AirExcellent golf and tennis venues are available throughout the area. Lake Pelham and the 100+ acre Mountain Run Lake Park provide excellent locations for picnicking and boating. Scenic canoeing is available along the Rappahannock River, which flows from the eastern slope of the Blue Ridge Mountains to the Chesapeake Bay.Culpeper is also home to Commonwealth Park, one of the state's largest equestrian facilities, hosting a variety of horse shows, rodeos, and special events.All throughout the year, Culpeper hosts a popular schedule of festivals and special events including April's Historic Homes and Gardens Week, the summer's Bluemont Concert Series, May's Culpeper Crafts Show, June's CulpeperFest, and old-fashioned Fourth of July Festival, October's Harvest Days Farm Tour and Airfest, fall's OctoberFest, and the October Wine Harvest Festival.And, of course, excellent dining and lodging accommodations are available in our may fine restaurants, motels, and Bed & Breakfasts."
  },
  {
    "title": "Charlottesville KOA",
    "price": 47,
    "image": "https://searchtinyhousevillages.com/wp-content/themes/spacious-pro/verified.png",
    "privacy": "moderate",
    "amenities": "Electric",
    "owner_email": "Lauretta_Weimann@gmail.com",
    "owner_name": "Ramon Pollich",
    "size_length": 35,
    "size_width": 10,
    "location": 219,
    "pets": true,
    "available_spots": 4,
    "description": "Thomas Jefferson's magnificent Monticello is a big draw here, and so is the woodsy Charlottesville KOA in the Blue Ridge Mountain foothills.  It is just a half hour to Skyline Drive and the Blue Ridge Parkway for stunning vistas, hiking trails, cave tours and waterfalls.  Visit a trio of historic sites; try tubing and rafting on the nearby James River; enjoy a wine tasting at the local vineyard or dine in downtown Charlottesville.  Back at the KOA, enjoy the pool, sports fields, game room, beaver pond and pedal karts."
  },
  {
    "title": "Airstream Park / Llamalopolis",
    "price": 1200,
    "image": "https://searchtinyhousevillages.com/wp-content/themes/spacious-pro/verified.png",
    "privacy": "none",
    "amenities": "None",
    "owner_email": "Jaunita.Quigley94@gmail.com",
    "owner_name": "Billie Stroman",
    "size_length": 35,
    "size_width": 57,
    "location": 623,
    "pets": true,
    "available_spots": 10,
    "description": "Once an RV-park-turned-vacant-lot, it is now a well populated intentional community of 33 tumbleweeds and airstreams in a circle, facing one another with a large central open space.The community celebrates accidental encounters that helps build community glue.People interested in membership must be recommended by a current member and will undergo a 1 week trial period.Nicknamed Llamalopolis because of the resident Llamas.  "
  },
  {
    "title": "Emerald Village",
    "price": 250,
    "image": "https://searchtinyhousevillages.com/wp-content/themes/spacious-pro/verified.png",
    "privacy": "moderate",
    "amenities": "electric",
    "owner_email": "Wiley_Cartwright68@hotmail.com",
    "owner_name": "Isadore Rogahn",
    "size_length": 24,
    "size_width": 34,
    "location": 11816,
    "pets": true,
    "available_spots": 7,
    "description": "Emerald Village Euguene (EVE) will include 22 tiny houses (160–288sq. ft.) designed as permanent dwellings on a slab foundation—complete with sleeping and living areas, kitchenette, and bathroom.The tiny houses will be supported by a community building that will provide acommon larger kitchen, meeting space, laundry, and tool storage.Residents of EVE will be members of a housing cooperative and will have a share in the village—enabling them to create a modest asset that can be cashed out whenthey choose to move-out.The monthly cost to live at EVE will be $250–$350 per month, and will cover the sharepayment, utility expenses, maintenance, and all other operating costs.A community agreement outlines a basic code of conduct that all residents must abideby, and requires that each resident participate in helping to manage the village.EVE will offer security of a stable home to very low-income people, as well as a voice in shaping how their housing is operated and managed through a democratic process.Potential residents must submit an application and interview with the membership committee. Applicants need to meet income requirements, demonstrate willingness to live in accordance with the community agreements, and contribute 50 hours of sweat equity during EVE’s development phase.  Click here to access the application process.Emerald Village Euguene is a project developed by SquareOne Village, a non-profit organization creating self-managed communities of low-cost tiny homes for people in need of housing. It builds upon the success of Opportunity Village Eugene, a transitional micro-housing community for otherwise homeless individuals and couple."
  },
  {
    "title": "Terraform Homestead",
    "price": 0,
    "image": "https://searchtinyhousevillages.com/wp-content/uploads/participants-database/2021/02/terraform0-300x146.jpg",
    "privacy": "moderate",
    "amenities": "internet",
    "owner_email": "Scot_OConnell@hotmail.com",
    "owner_name": "Adrienne Zulauf",
    "size_length": 20,
    "size_width": 25,
    "location": 21408,
    "pets": true,
    "available_spots": 4,
    "description": "Terraform Homestead is a tiny house, eco-friendly, educational community near the amazing small town of Bisbee Arizona.After building my first tiny home in 2015, traveling the country in a Honda Element, building a second tiny home in 2017... and the hiking halfway across the country on the Pacific Crest Trail in 2019... I finally settled down and purchased land to build a community of like-minded individuals who want to live simply, sustainably, and happily out in the desert.We are BRAND new. We purchased 100% raw, undeveloped land in Mid-January of 2020 and have been working to build it into a beautiful community. The end goal is to have a self-sustaining community of 5-8 full-time dwellers and a regular flow of travelers coming through.Community Vibe: My Girlfriend, Katie and I (Richard) own and run the community. We are both earth-friendly, yogi, liberal, crunchy hippie types and are looking for more people who fit with our ideals.We are both Vegetarian/Vegan and do ask that community members keep at least a vegetarian diet while on the land. This is not just because of our ideals, but it also helps significantly with keeping away pests, dealing with black water, and dealing with waste since all trash has to be either burned (cardboard/paper) or packed out.We LOVE board/card games, campfires, good conversations, learning things, plants, and sharing meals and drinks with other people. The main goal of this community is to have people around that we can both learn from and teach and enjoy each other's company.We are a nudist/naturalist friendly community. There is no requirement to participate, but please know that others may and be respectful of everyone.If you are interested in learning about going off-grid, construction, permaculture, growing food, harvesting water, producing energy, this is a great place to be. While I have a fair amount of knowledge in construction and solar, we are learning as we go with all of this... we are not looking for people to pay to stay, but rather to bring their knowledge, passions, expertise, and willingness to learn to the community. If there are projects you are passionate about and want to try, we are certainly open to hearing them and if it makes sense for the community to try it out! If you are new and want to learn we are happy to teach. Just be open and willing to learn.Community Expectations: We are not looking for monetary contributions... but rather we need help with projects as we build this community.Skilled labor is great, but not required. Much of the work we have to do out here is very physically demanding. We are open to project ideas and will let you pursue projects/experiments that interest you if they fit within the end goal and budget of the community. We're happy to teach. Artists are also very welcome and if your work fits our vibe, look and feel, we would love murals/sculptures created.The Area: Our community is between Bisbee, Tombstone, and Sierra Vista Arizona.Bisbee (20 minutes drive south): Bisbee is an amazingly small, artsy community tucked away in the mountains. It has a handful of great dive bars, a brewery, regular live music, cute shops, and an all-around great vibe.Sierra Vista (30 minute drive west): Sierra vista is where we get all of our supplies. They have big grocery stores, home depot/lowes, Walmart, a good library, UPS, co-op, chain restaurants... etc. There is also a large hospital 20 minutes away.Tucson (1:30 hr drive north): Tucson is close enough to be accessible. They are a large metropolitan city with an international airport. There is free camping near town and makes a great spot for a weekend getaway.Hiking/Biking/Outdoors: Our property touches BLM land which is accessible for cross-country hiking literally from your doorstep. The Arizona trail southern terminus is a 45-minute drive away. There are TONS of mountains and hiking trails very close to us.Other Cities: We are within a one day drive of Colorado, Southern Utah, San Diego, New Mexico, and only 45 minutes from the Mexican border. The Grand Canyon is about 6:30hrs away, Phoenix about 3hrs.Upcoming Major Projects: • Shade Structures/Workshop• \"Rain Roof\" and rainwater harvesting system• Sandbag/Earth Ship Root Cellar• Gardening/Aquaponic Systems• Community Kitchen/ShowerKnow before you apply: We do live in the desert and off the grid. The hots are hot, the colds are cold, and we have a ton of wildlife including rattlesnakes, spiders, scorpions, bobcats, coyotes, and javelina. We are in no way responsible for any injuries that may happen out here and we do have a waiver for all new members.The purpose of this community is to be a happy, healthy, and sustainable place for everyone involved. If you don't fit the community vibe, you will be asked to leave.We are 3 miles off of the paved road. Our road is accessible by 2 wheeled drive vehicles, but it can get muddy and slick during rains.You must provide your own internet service. AT&T and Verizon work well out here (other services should, but I can only confirm the two).You must provide your own power. Solar is highly encouraged and generators should only be used as a back up if we have multiple cloudy days (which is rare).We have water tanks on-site a short distance away from our parking spots, but water must be hauled to tanks because the cows and javelina will eat any exposed hoses.We should have laundry and a community outdoor shower and toilet."
  },
  {
    "title": "Le Petit Quartier",
    "price": 150000,
    "image": "https://searchtinyhousevillages.com/wp-content/themes/spacious-pro/verified.png",
    "privacy": "moderate",
    "amenities": "internet",
    "owner_email": "Marcellus39@hotmail.com",
    "owner_name": "Samanta Ullrich",
    "size_length": 60,
    "size_width": 47,
    "location": 17117,
    "pets": false,
    "available_spots": 9,
    "description": "Le Petit Quartier is a 73 tiny houses development designed on pocket neighborhood style greatly inspired by Ross Chapin’s style. All houses are 480 sq.ft. and some have a loft and even a full second floor.  The 13 acres site is located 12 minutes from downtown Sherbrooke, Quebec, Canada and will include a 6 acres natural forest, many parks, a community building, a swimming pool, a large community garden and much more. The concept was to create a country village in the middle of a large town. A place where everyone knows and helps each other. A place where the usage of a good is more important than owning it. As Richard Painchaud, the creator of Le Petit Quartier, says, most tools will be bought by the community and for the usage of all. Why should we all have one if 15 lawn mowers are enough. Buy less and share more is our motto! It’s a cohousing project that started almost 6 years ago and already 66 new owners signed up and created their board of directors.  The whole project will be completed by the end of 2019. The prices, starting at 150,000$ cdn all included, are far below the average price of the area which is 264,000$. The whole project has been created and managed by voluntary work, with no salary or profit, by citizens and for citizens. When profits are not your main goal, you can do miracles!"
  }
]
  await Spot.insertMany(spots)
}
const run = async() => {
  await main()
  db.close()
}

run()