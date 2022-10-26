import { Fade, Switch, Typography } from '@mui/material';
import React from 'react';
import { ColorModeContext } from '../App';
import Header from './Header';

const Mode = () => {
    const colorMode = React.useContext(ColorModeContext);

    return (
        <>
            <Header></Header>
            <Switch onClick={colorMode.toggleColorMode}>Mode</Switch>
            <Fade in={true} timeout={1000}>
                <Typography
                    sx={{
                        color: 'text.primary',
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto dicta nobis ex possimus laudantium voluptatem voluptatibus ipsam enim explicabo, culpa iure blanditiis corrupti nesciunt magni animi, quidem dolorum odit eaque ullam deleniti ducimus! Praesentium nostrum temporibus eveniet voluptatibus cum earum magni quo, labore laboriosam perferendis perspiciatis ipsam dolorum cupiditate vitae, officiis ad aut suscipit neque. Soluta totam unde, minus nisi quaerat ipsam iste nulla ratione dolorum. Neque possimus at, molestias asperiores explicabo eveniet suscipit veniam. Fugiat illo, molestiae hic mollitia cupiditate perspiciatis, cum aspernatur, corrupti magnam exercitationem at nulla praesentium inventore reiciendis illum animi ab voluptate. Doloremque dolor asperiores odit illo ratione natus, dignissimos tempora excepturi, non esse perferendis enim inventore soluta officia quo autem animi mollitia error! Ipsa aliquam quia totam sequi praesentium labore! Dignissimos, quaerat quas labore consequuntur reiciendis quia nisi recusandae, porro magni pariatur atque sunt magnam temporibus. Molestiae aliquid, nulla nihil et commodi libero nemo similique nisi aliquam quis quae ullam nam ipsa molestias voluptatibus facilis, veritatis possimus incidunt ad modi tenetur cum quam maiores. Nulla ipsa culpa mollitia labore deleniti in officia sit blanditiis deserunt laborum ipsum dicta quos optio, saepe minima fuga eaque eveniet placeat et, nemo itaque! Similique ad pariatur odio excepturi sequi veritatis sunt optio doloremque, delectus unde. Delectus vel nihil error obcaecati libero maiores, ratione explicabo ducimus. Illum saepe fugiat aliquam ducimus! Officiis beatae accusamus porro voluptas unde nihil quia debitis distinctio qui ipsa suscipit adipisci voluptate aperiam facere dolore est, tempora vero fugit sit temporibus natus? Officiis neque maxime dicta nostrum corrupti impedit reprehenderit, animi rem veniam quod sed, quae repellendus ex ad voluptas corporis alias quidem eum! Fugit ipsa culpa provident! Suscipit ab ipsa incidunt et, perferendis sit quis neque at exercitationem, est amet quasi maxime eveniet culpa quaerat natus molestiae tempore. Dolores veniam reprehenderit est praesentium labore sequi ab et beatae vero consequatur corporis culpa accusamus, eligendi deserunt? Adipisci aperiam eum voluptatibus similique porro quasi suscipit tempora maiores, delectus, perferendis voluptas deserunt! Cumque, perferendis? Ipsa impedit delectus nihil minima tempora reiciendis commodi? Unde enim vel, doloribus a nisi, facilis quia voluptas sit obcaecati, excepturi quaerat esse omnis. Odio consequatur ipsam et tempora esse ex necessitatibus placeat. Nulla aliquam, numquam nihil maiores possimus quas in distinctio ad non cumque perspiciatis sit quidem modi earum ab omnis cum dolore. Vitae facere at quisquam est minus aspernatur, aperiam obcaecati iure? Ullam, deserunt sequi sed neque tenetur repellat consequatur corporis, nulla aliquam blanditiis minima voluptas magni esse quas aspernatur quasi odio repellendus veritatis vel dolores architecto. Illum, veritatis voluptatibus! Aliquid modi est cumque neque mollitia velit commodi corporis odit aperiam! Numquam maiores minima repellat quibusdam, a, quas dolor eius magnam praesentium voluptatum repellendus. Excepturi, minima non vel ea quod voluptatem odio ad aut a accusamus, repellendus autem, aliquid fugit eligendi sapiente cumque? Aspernatur unde libero magni, hic delectus a minus ipsum nisi quos illum sunt sapiente molestias non ab mollitia. Ut eum minus, est at architecto consequatur natus commodi, cumque neque praesentium suscipit! Sunt itaque velit magnam officia esse ex ratione nihil! Molestias libero optio placeat, id, distinctio atque cumque ut minima mollitia fugit aliquid voluptatibus tempora quod laudantium aliquam quasi necessitatibus temporibus dolore. Tenetur iusto quis quidem? Eum nam facere optio non voluptate quae repellat repellendus. Iure eveniet odit sed ea mollitia tenetur ab aut eos nemo error. In ut ea dolore quidem quibusdam nesciunt totam quo placeat ipsam voluptate sint ipsa, facilis impedit, beatae necessitatibus asperiores voluptatibus minus optio accusamus. Adipisci voluptate asperiores quae, laboriosam fuga esse iusto voluptas, perferendis ratione accusantium facere obcaecati ut dolor est suscipit veritatis nesciunt. Minima cumque perferendis corporis dolores explicabo iusto rerum! Aspernatur explicabo soluta molestiae dignissimos possimus quaerat itaque libero sunt porro ut quae corrupti voluptatibus, labore velit, non, iusto autem omnis? Explicabo pariatur veritatis fugit velit cumque perspiciatis? Laborum dolore, dignissimos molestias accusantium ea obcaecati dolor suscipit perspiciatis perferendis recusandae quasi, similique at tempore labore assumenda soluta! Neque commodi eveniet voluptate officia ipsam fugiat itaque quae ad obcaecati sapiente! Molestiae ipsum adipisci fugiat, asperiores molestias nulla veniam amet placeat tenetur velit excepturi necessitatibus ut commodi ab provident porro, ipsam qui aperiam! Voluptatibus nobis placeat, aspernatur optio quam tenetur molestias alias provident soluta. Eius, facere corrupti reiciendis rem asperiores, error nesciunt animi tempora libero fugiat mollitia, adipisci magnam. Aspernatur doloribus modi hic voluptates, excepturi natus maxime ea expedita ipsum nihil ipsa, ut vero quod error mollitia odio distinctio consequatur beatae eum et. Recusandae necessitatibus nemo consequatur minus quaerat nam illum nisi eius culpa voluptate? Accusamus quibusdam molestiae libero recusandae qui tenetur in quia delectus odio? Iure provident quis tempora maiores accusantium impedit aperiam, pariatur obcaecati, consectetur odit soluta deleniti! Ut doloribus ad alias, reprehenderit excepturi aspernatur, modi exercitationem maiores commodi est saepe nam, labore perferendis eaque cumque praesentium quo quibusdam! Corrupti neque impedit vero libero officiis facere autem fugiat, sequi mollitia officia architecto quam illo sunt laudantium qui nihil cumque sit amet voluptatem nostrum magnam non suscipit dignissimos accusamus? Accusamus, sed consectetur! Itaque, minus impedit obcaecati facere dolorem at deleniti doloribus harum incidunt aliquid excepturi inventore cupiditate voluptatem beatae aut voluptatum recusandae cum? Commodi sunt eveniet vero adipisci soluta ipsa corrupti perspiciatis necessitatibus blanditiis odit error veritatis aspernatur aliquid, libero unde, impedit qui iure aut cum! Exercitationem optio laborum hic temporibus vero, sint ullam quisquam nulla nam amet necessitatibus incidunt, quos perspiciatis reiciendis accusantium harum libero, aspernatur et officiis? Saepe debitis doloremque, quod dolore doloribus voluptatem ut nobis quaerat! Sint ratione rem placeat ab facere commodi libero, aliquid earum nemo at perferendis iure asperiores accusantium veritatis provident corrupti quasi, dolorum saepe quaerat. Vel sapiente molestias consequuntur totam accusantium unde quam veniam? Pariatur eos quas aperiam id, sed tempore ex sapiente labore aliquid nemo dignissimos itaque soluta necessitatibus enim! Rerum molestiae a possimus alias iste nam sed quam? Odit laboriosam accusamus sed delectus! Adipisci a ipsum, nemo recusandae perspiciatis quidem earum repudiandae hic nobis quod debitis quaerat quo commodi exercitationem in vero! Ea impedit et a exercitationem dolores. Nobis doloremque dolorem eos possimus. Aspernatur nulla aperiam ipsum, accusamus earum ab, aliquid quasi eos unde qui voluptates fuga neque. Voluptates nesciunt voluptatem doloribus, veniam accusantium aliquid assumenda exercitationem quibusdam laboriosam rerum earum molestias fuga labore quod delectus? Ex, aliquid eaque consequatur natus dolore quo tempora illum aperiam! Excepturi eum beatae ipsum culpa quam necessitatibus blanditiis enim iusto officia aperiam nihil exercitationem, consequuntur odio, incidunt deleniti. Enim molestias obcaecati deleniti voluptate corporis, vero quisquam minus reprehenderit culpa sunt laboriosam mollitia quam soluta. Itaque ullam eos necessitatibus illo sapiente consequatur omnis possimus laboriosam amet unde, odio pariatur cupiditate iure dolor officia distinctio ea a nobis nihil inventore fugiat doloremque? Quis, quae quam aut iste ipsa quidem similique pariatur facere asperiores exercitationem officia aspernatur amet suscipit, in debitis rem tempore? Maiores nemo necessitatibus minus debitis, repellat iure excepturi fugit nesciunt explicabo, illo nobis eos, ad amet ab? Obcaecati omnis est dignissimos quaerat quo velit doloremque porro ullam ducimus quod, aspernatur reprehenderit beatae. Quidem illum id sequi expedita. Minima soluta officia quam fuga maxime ducimus? Dicta rerum quod corrupti inventore beatae, fuga nobis voluptatum eligendi delectus, voluptatem accusantium totam! Dolorum quam aliquam eaque possimus molestias tenetur porro voluptas quibusdam enim dolore nisi necessitatibus deleniti tempore magnam recusandae, ea laboriosam nemo rem eveniet maiores? Nam placeat molestias ad architecto adipisci, et reiciendis ea veritatis, voluptate expedita ipsum quae ab quaerat, aspernatur obcaecati doloremque eligendi. Doloremque laboriosam fugit accusamus, temporibus cupiditate pariatur corrupti expedita nostrum quae vitae nulla labore quia numquam repellat. Quae ut eius, reprehenderit quia maiores earum nisi distinctio enim ipsum a reiciendis rerum dolorum suscipit fugiat nostrum facere molestiae accusantium iusto eum. Porro deserunt illo reiciendis blanditiis, sunt sequi quasi dicta aliquid cupiditate iure amet. Temporibus voluptates accusantium dolor nihil delectus cupiditate recusandae labore, sunt quo mollitia asperiores cumque, sint qui quasi. Similique consequatur doloribus harum culpa cum veniam repellat consectetur asperiores amet, voluptate nihil unde eveniet quidem, commodi eos veritatis blanditiis hic quos! Temporibus ullam natus fuga ipsum nesciunt similique, porro omnis laborum magni debitis fugit recusandae, enim dolorem libero, unde maiores tempora. Necessitatibus praesentium eveniet, aperiam, corporis eaque sequi cumque provident hic enim, eligendi iste nobis fuga ratione totam veritatis rerum possimus illo nihil mollitia deleniti repudiandae veniam id facere qui? Praesentium voluptatem, laboriosam vel quae molestiae sunt odit ratione neque nam eaque iste. Magni corporis consequatur itaque quos? Nostrum temporibus sed aut facilis vel magnam minus rerum vero dignissimos dicta omnis incidunt reprehenderit officia saepe, odio at quas asperiores dolore, obcaecati ex fugiat explicabo laudantium odit? Ut vel natus asperiores, labore in consequuntur aliquid consectetur sequi non et aperiam minima veniam. Recusandae vitae perspiciatis rem tempore totam illo inventore ab ut nesciunt omnis ullam doloremque earum sapiente quis tenetur esse quaerat obcaecati a necessitatibus iste in odit aperiam, eos nisi. Atque vel vitae quibusdam, tempora, iste reprehenderit fugiat ea molestias unde est corrupti eligendi odit? Veniam eos nulla necessitatibus hic nostrum asperiores, doloremque, earum expedita similique, neque repellendus? Accusantium ad totam laboriosam, asperiores repudiandae soluta molestiae atque dignissimos obcaecati molestias. Fuga reiciendis delectus molestias? Voluptas nihil eaque quis sit molestiae laboriosam error magni harum maiores repellat veritatis provident exercitationem totam odit, vel reprehenderit expedita quia cupiditate doloribus necessitatibus alias. Maxime cupiditate voluptatem eius consectetur repellendus dolores labore possimus voluptatum, ipsum quisquam sit qui dolore iusto libero saepe inventore asperiores fugit porro sed beatae. Repellendus, fuga! Perspiciatis eum dignissimos error repudiandae inventore, aperiam laborum, veritatis repellendus facere ipsa atque rerum quam aut voluptatibus pariatur debitis? Fuga error, necessitatibus vel, itaque ducimus nobis sit quo dolores minima quibusdam similique qui. Rem molestiae doloremque eum, at debitis necessitatibus aspernatur. Cupiditate nostrum similique enim consectetur veniam asperiores architecto numquam, ipsa facere quos mollitia impedit et cumque tenetur delectus officia placeat eligendi ex perspiciatis consequatur? Sequi, exercitationem id sapiente enim ex asperiores odit quo esse, totam sit quos error. Exercitationem aut provident voluptate. Hic saepe minima ex ratione inventore mollitia fugiat, dolorem quod explicabo ullam amet voluptatem sapiente quidem est dolore eaque, itaque voluptatum, sint enim aliquid cupiditate. Dolores voluptas quis praesentium sunt sequi nobis odio beatae velit, aut impedit alias aliquam illo quae totam labore cupiditate dignissimos. Nisi, assumenda cum nesciunt deserunt quas, ab nam, saepe explicabo natus illo autem sint. Eum, at. Repudiandae consectetur ut distinctio dicta exercitationem perferendis tempora, accusamus ea, ab error illum maiores! Consequuntur dicta natus necessitatibus quis quaerat vero minima laboriosam distinctio! Veritatis modi magnam numquam quia praesentium dicta temporibus, ducimus perspiciatis veniam unde fugit iure sequi iste dignissimos non dolorem, cupiditate ipsa expedita culpa! Delectus a adipisci voluptatem dolorem eius numquam, exercitationem dolore iure at aperiam tenetur corporis laborum minus illo dolores reiciendis impedit cupiditate, rerum praesentium architecto quaerat ab? Nesciunt corporis perferendis temporibus facere quaerat iste magnam earum quae ratione, aspernatur assumenda odio repudiandae praesentium nostrum amet, dolore expedita optio neque doloremque maiores non iusto culpa. Perspiciatis omnis tenetur sunt recusandae, non at culpa velit esse maxime repudiandae possimus dolor. Quam sed ipsa illo earum mollitia, vero reiciendis consequuntur ea placeat eius qui magni sint fuga recusandae excepturi laborum deserunt temporibus? Fugiat tenetur eos dolore reprehenderit at autem sapiente in, porro quas quis? Impedit consectetur tempora, facilis amet, alias fuga molestias et accusamus accusantium dolore eum. Totam ut quibusdam dolorum optio eius sapiente eveniet quos voluptates quia reiciendis deserunt aliquid nobis voluptate incidunt molestias, in officiis placeat. Officiis quae minima minus harum officia, sint rerum laborum nemo explicabo laboriosam labore quos a vero sed aperiam illo! Dicta nostrum quibusdam tempora neque quis est reprehenderit in, sunt iusto ipsa ut enim, illo iure? Repudiandae dolor placeat sequi? Exercitationem quod ab suscipit? Dolorum, odit repellendus ullam et temporibus odio necessitatibus delectus illo dicta porro possimus magnam aliquid voluptatibus hic dignissimos ipsa blanditiis non assumenda aperiam error incidunt dolorem! Mollitia quasi necessitatibus beatae cum? Aut beatae sunt quo omnis! Perferendis autem id beatae, excepturi temporibus cupiditate, cumque sed quidem aliquam ad nihil. Doloribus repellendus eveniet, in praesentium optio quo tempora unde necessitatibus dolorum fuga illo eum animi officia. Et aliquid, ipsam minus nobis asperiores repellat quas iste aperiam, numquam, iusto ex incidunt corrupti rem sunt id illo excepturi dignissimos atque in! Impedit laboriosam necessitatibus quibusdam quis laborum eveniet pariatur eos! Quibusdam perferendis non fuga consequuntur? Atque accusamus magnam, veritatis voluptatem alias fugit corporis illo inventore provident modi nobis iusto enim. Aspernatur voluptates reprehenderit tempore fuga sint pariatur nemo dolore harum labore ad, modi minus necessitatibus mollitia incidunt blanditiis laboriosam doloremque tempora cupiditate debitis odio excepturi, unde saepe fugiat qui. Ipsam laborum similique facere mollitia nihil nulla blanditiis earum, veritatis laboriosam, nemo magni consectetur sunt tempora iure consequuntur iste. Vel, magni! Possimus, tempora sapiente ullam, labore quo eum veniam nobis quisquam soluta voluptate reiciendis. Suscipit placeat cupiditate temporibus expedita voluptatibus corporis. Provident, alias id molestiae eum, possimus beatae quia, cupiditate pariatur quos dicta aliquid distinctio tempore eius eos! Id, ratione. Impedit tempore voluptate tempora eaque quaerat fugiat cum, itaque, eveniet minus voluptatibus inventore, dolorum harum voluptates repellat! Modi esse cumque laboriosam odio natus iure explicabo quia iusto ea quod. Laudantium, veniam eligendi et asperiores illum odit laborum neque dolores modi iure id eum, alias architecto beatae doloribus ad perspiciatis ipsam fugiat rem cum. Porro ad blanditiis dolorem dignissimos suscipit delectus nihil. Non architecto, nulla debitis consectetur quam consequatur cumque praesentium harum molestias quibusdam est ex laborum deleniti officia nisi? Eos recusandae inventore repellat eius doloremque veniam doloribus quam reiciendis, odio, sequi, consequuntur dolorem nobis placeat laborum. Provident, et iusto laboriosam facilis aliquid quo magnam qui. Provident minima dolore omnis, sequi sapiente error eum, ipsum laboriosam quae, et facilis qui. Perferendis ipsa nemo sit illum architecto neque harum. Dicta porro nulla consectetur quam tempore vero, consequatur at facilis et expedita quos doloribus hic, cumque pariatur delectus similique. Laudantium beatae alias enim autem ab aspernatur aliquid ipsam esse iusto. Impedit, voluptatibus. Sed, doloremque repudiandae modi odio rerum recusandae consequatur explicabo odit in veniam id facere maiores ratione voluptate non. Praesentium quia nesciunt officia itaque repudiandae dolor eaque vitae rerum eos. Facilis numquam commodi in blanditiis, fugiat quia autem accusamus velit a deleniti corrupti, nulla ab, possimus cupiditate error asperiores at ullam tempore soluta minus eligendi cumque. Delectus debitis quidem aliquid corporis quae repellat accusantium voluptas provident totam. Vitae ad facere unde non soluta sed, tenetur eaque est sit id quisquam natus iusto enim tempore ratione modi dolores corrupti nam maiores at, culpa et corporis totam! Magni ut placeat provident repellendus. Quae repudiandae dignissimos eligendi dolores quidem culpa libero possimus? Sunt ex odio officiis distinctio provident architecto eos totam repellendus nihil ipsa deleniti animi, nam atque non adipisci, dignissimos veniam minima accusantium. Tempore laborum ipsa molestiae quo assumenda quia inventore, consequatur deserunt ab aperiam facere natus quae facilis ex possimus obcaecati. Possimus labore laudantium voluptatibus temporibus? Deleniti rem enim beatae. Sapiente, velit ullam fugit optio doloremque porro doloribus, error ab non voluptatibus aliquam accusamus autem saepe voluptatum tempore exercitationem ipsum illum ratione possimus quaerat sit maiores. Odit, illum veritatis nobis magni vel animi amet ducimus quam nostrum fugiat corporis similique dignissimos quo veniam hic, minus aspernatur ipsam nam. Aliquid perspiciatis officiis sunt libero aut recusandae asperiores totam quam quia, saepe odio earum, laborum, eaque enim corrupti repudiandae harum excepturi? Dolorum suscipit corrupti perferendis maxime excepturi tempore repellendus dignissimos. Quo ipsa repellat iure necessitatibus amet impedit quas esse sint, consequatur iusto fugiat ab! Officia a amet dicta nesciunt temporibus sint consectetur quos culpa minima earum dignissimos sed ducimus sit non odio assumenda quae illum dolor officiis soluta repellendus, blanditiis aperiam. Explicabo eius at, delectus saepe dicta reiciendis magnam quas consequatur commodi deleniti, minima perferendis hic. Ducimus iure sunt at qui natus eos minima, aut explicabo vel ipsa quam? Eum perferendis dolores nesciunt minima voluptates beatae atque! Praesentium asperiores in mollitia velit, vitae ea placeat? Dolores totam vitae vel dicta quaerat non placeat accusamus, repellendus sit necessitatibus quos in repellat deserunt sequi ea doloribus cupiditate ducimus maxime commodi ipsa aut? Reprehenderit et maiores rerum illum tempora dolores a sunt, voluptatem nam recusandae modi minus numquam. Mollitia assumenda consequuntur saepe non dolorum eaque, similique vero qui voluptas esse eius eos ad labore modi numquam. Magnam ducimus, saepe recusandae et quibusdam impedit soluta vitae ipsa aliquid esse voluptas. Atque, neque voluptatibus obcaecati aperiam illum quidem molestias sint veritatis cum quo pariatur saepe rem voluptates commodi nulla eaque quasi voluptatum distinctio nisi labore fugit rerum earum beatae. Optio tempora quasi asperiores reiciendis harum esse ducimus voluptates fuga perspiciatis labore accusamus corrupti atque exercitationem nam quaerat adipisci eius quidem cum maiores, ipsum minima velit libero quo ipsa. Corrupti consequuntur necessitatibus, provident expedita delectus enim eos minima deserunt maxime. Harum, placeat molestias eveniet molestiae voluptate natus voluptates numquam ipsam laborum nihil suscipit iste velit illum aliquam modi totam nostrum, quasi cumque officia minima consequatur. Consequatur, quis enim nulla laborum quod ab eligendi voluptate ex. Aspernatur, molestiae assumenda! Cumque, quam sapiente voluptatem quidem dolores obcaecati blanditiis sed maiores neque autem optio enim voluptates fugit repudiandae placeat, iste officiis tempora repellendus magnam quo asperiores. Voluptatem vel ipsam suscipit consequatur itaque fuga error voluptate, quo sapiente quasi cum officiis magni mollitia ad exercitationem aliquid dolorum earum, voluptas dolore sunt eveniet. Blanditiis incidunt ab a sunt suscipit recusandae cumque necessitatibus ipsam praesentium odio iste perferendis ipsa illo, soluta, quia rerum dignissimos accusantium et ipsum! Aliquam odio quas nesciunt aut alias sunt fugit tenetur tempora, tempore distinctio atque at modi. Magnam veritatis natus blanditiis aut illum placeat, quod, porro neque fugiat, consequuntur alias quae accusantium sed ipsam! Hic repellat autem nisi consectetur quaerat perspiciatis. Quasi neque mollitia possimus placeat perferendis consequuntur error optio animi praesentium sint, ad similique et necessitatibus! Molestiae ducimus corrupti nostrum cum. Numquam nobis, quae inventore recusandae dolor consequatur amet hic, optio exercitationem nam, dicta distinctio alias consectetur deserunt dolorem voluptate libero vero nihil modi atque non provident sit? Delectus quis minus illo provident asperiores rem voluptatibus dolorem id. Officiis nisi ducimus nostrum, ad excepturi magnam cumque necessitatibus, tempora tempore accusamus aperiam? Voluptatem quaerat architecto itaque deserunt tenetur, exercitationem nesciunt aperiam aliquam! Deserunt, alias perspiciatis. In nihil tenetur mollitia fugit ad, nisi quisquam placeat voluptas nulla quibusdam necessitatibus, quis velit aspernatur ratione corrupti, omnis et nemo optio expedita. Officiis, aliquam quisquam, id fugit placeat repudiandae voluptate, enim harum deserunt voluptas quam eaque est officia accusamus? Ipsam optio impedit beatae deleniti minima, esse repellat porro veniam, quae dolorum quia maxime debitis! Ipsum, eos ex! Quos maiores ipsum est tenetur eius neque laborum blanditiis natus pariatur nesciunt eligendi culpa repudiandae iusto, beatae dolor, quia minus itaque deleniti! Cumque doloribus, atque aspernatur hic impedit unde rerum officia modi in ducimus reiciendis autem numquam ex maiores eveniet aut nostrum facere aperiam! Beatae vitae voluptate sapiente dolore molestiae itaque eveniet, libero a distinctio vero reiciendis, voluptatibus, facere modi labore error quidem tempore explicabo eum dicta vel repudiandae? Sequi laborum ipsam commodi accusantium iure ut, consequatur quae enim dignissimos ipsum ducimus repudiandae reiciendis et! Deserunt fuga sed ullam expedita id quae distinctio ducimus deleniti, a totam dolorem doloribus eum est exercitationem vel necessitatibus nemo! Assumenda exercitationem laboriosam facilis reprehenderit eaque quos magnam excepturi sequi perferendis error iste, cumque sint deleniti sapiente repudiandae consectetur velit eligendi ea nulla nesciunt. Dicta omnis atque numquam rerum! Velit totam recusandae culpa ipsam, eaque eos sit laboriosam asperiores nostrum quo, autem harum natus veritatis! Tempore exercitationem ipsa dolore iure officia, ullam quo molestias quas vero officiis doloribus nihil voluptates voluptas odio porro vitae labore aut eveniet. Dolore, eos eligendi, blanditiis nulla a perferendis modi sit beatae soluta, consequuntur fuga? Aut debitis doloribus explicabo ab odio eius possimus quibusdam rerum! Quasi cumque veritatis voluptate temporibus, dicta sed omnis ullam illo rerum veniam, corporis porro necessitatibus, iste optio totam consequatur laboriosam illum quam vero impedit harum commodi corrupti natus labore? Excepturi nihil blanditiis ducimus tenetur beatae obcaecati, nam mollitia sunt? Vitae atque suscipit dolore placeat quas quos quaerat iusto aperiam minus officiis eligendi, facilis sit adipisci distinctio illum! Sit veniam voluptatem fugit, deserunt debitis fugiat ea nam ipsam necessitatibus nobis voluptas amet earum laborum. Quisquam officiis laudantium ducimus ullam mollitia incidunt soluta non rem sequi commodi blanditiis minus ab, deleniti quasi atque eum cumque earum necessitatibus minima. Eaque quae mollitia illo accusamus dolore, tempore odit porro amet dolorum culpa quis ipsum deserunt voluptatibus. Iusto beatae aut cupiditate doloremque accusantium officia nam veniam soluta officiis totam vitae esse optio assumenda laudantium dolorum voluptate, exercitationem ex alias sapiente fuga error molestias. Nulla minus libero voluptatem, excepturi reprehenderit ratione eius temporibus delectus harum at soluta? Eaque, sunt porro odio perspiciatis facere cum possimus natus iste non consequuntur veritatis quis, cupiditate, obcaecati hic? Tempore eos at, qui accusamus culpa officiis placeat nam distinctio quas voluptate maiores libero molestiae dolorem autem beatae. Placeat voluptatem quibusdam aliquid earum rem et libero accusamus temporibus facere doloribus? Eos obcaecati corporis nemo voluptatum velit autem quos natus, quo quibusdam odio officia commodi vitae incidunt possimus quaerat itaque ipsa, facere amet. Cumque reiciendis odio recusandae doloremque, nulla mollitia fugiat, vero facere voluptas atque quaerat! Nostrum dicta veritatis asperiores officia, laudantium totam amet modi quo repellat molestias mollitia suscipit porro a magni dolor. Qui suscipit veniam sed asperiores unde. Libero facilis inventore placeat odio, voluptates a ea id, accusamus, eius aliquid cum ad nostrum. Dolore eaque enim vitae sequi. Provident officiis, aperiam excepturi eligendi ipsam, perspiciatis veritatis, labore sint pariatur sunt maiores sapiente vitae quam corporis autem. Nam cum cupiditate consequatur blanditiis suscipit earum nihil assumenda, excepturi inventore adipisci dolor possimus alias fuga hic, quod quam voluptates rerum, necessitatibus laudantium corrupti mollitia commodi. Inventore, blanditiis tempore sit eaque impedit natus, aut eligendi dolorem possimus eius illum quia, magni distinctio pariatur hic? Reprehenderit consequatur in soluta fugit exercitationem, obcaecati sint deserunt iusto atque doloribus quidem aperiam magnam quibusdam, magni aut blanditiis eos recusandae architecto sunt voluptas facere ipsam accusamus suscipit nam? Possimus, odio laborum enim praesentium aliquid quas similique amet sint excepturi id consequatur dolores ipsum. Enim ratione id quidem, nihil libero voluptate odio neque commodi veniam, magni labore voluptatem doloremque possimus maiores deserunt eveniet vel? Ducimus natus voluptates reprehenderit. Expedita deserunt culpa ipsam explicabo eius ex sit praesentium cumque voluptate accusantium! Tenetur excepturi itaque perspiciatis architecto odio at aliquam amet recusandae eligendi eum, rem optio soluta eos temporibus, iste minima sequi consectetur dolor accusantium blanditiis? Velit eaque esse, quasi dolor nihil quo. Omnis magnam enim sint deserunt maxime quo quisquam nostrum distinctio. Vel aperiam sequi tempora voluptas quae officiis ut minima incidunt numquam neque, modi, est corrupti odio ratione id tenetur doloribus nulla sunt eveniet? Fuga vel velit accusamus maxime esse odio et exercitationem fugiat, accusantium dolore dolorum. Eos doloremque accusamus inventore quo minima qui, maiores soluta sed aperiam. Reprehenderit laboriosam natus ea libero, odio sint adipisci debitis consectetur repellat, ducimus dolore? Aperiam eos, beatae veniam officiis dignissimos molestias voluptatum atque, modi esse iusto ex tempora dolorem cum expedita tenetur explicabo autem tempore, magnam animi fugit? Perferendis eius minima temporibus molestiae minus. Doloremque voluptatum modi possimus, dicta iusto enim velit, alias sunt cumque exercitationem blanditiis laborum optio saepe facilis vitae ducimus fugit quaerat dolores at nemo animi error natus! Assumenda, nisi! Consequuntur eaque itaque asperiores amet, aspernatur facilis quod ab magni pariatur similique rerum facere reprehenderit minima, nulla nostrum, mollitia ex aliquid doloribus consequatur. Nam sequi velit assumenda atque autem accusamus. Optio voluptatem magni, facilis pariatur dolorem dolorum inventore eveniet minus doloremque nesciunt praesentium animi nam, distinctio neque, velit alias ad impedit ipsa asperiores. Explicabo repudiandae molestias pariatur ex perspiciatis dolores magni, natus sint nihil voluptatibus quas necessitatibus, perferendis quisquam iusto non nemo hic! Deleniti libero reiciendis placeat fugit animi inventore a sit maxime! Dignissimos temporibus distinctio debitis itaque facilis eius porro recusandae expedita! Quae officia excepturi dignissimos quas a laudantium sunt expedita ipsum delectus eum beatae assumenda alias maxime labore, ex blanditiis ab. Iste, excepturi. Soluta est illo vel, nobis, non neque odio ducimus ipsa odit a placeat dolorem voluptate beatae, debitis dolor! Itaque qui aut perspiciatis iure consectetur earum at quis ullam nobis sed blanditiis, libero quibusdam eius quisquam? Quaerat asperiores debitis beatae soluta. Distinctio, minus velit. Aperiam nobis tempora harum repudiandae perferendis culpa quas mollitia maiores molestiae explicabo. Quae, laudantium cumque obcaecati cum optio animi totam eaque voluptatem. Dolores commodi quod ut! Vero, explicabo deleniti omnis ipsum deserunt distinctio amet esse voluptatibus, tempora laboriosam beatae magnam voluptate exercitationem itaque nulla possimus perferendis eligendi ipsa facere! Tenetur minus autem quae consequuntur perspiciatis maiores minima, iure dolorum cupiditate, totam soluta animi ipsam, temporibus fugit provident corporis eaque voluptatibus odit doloremque iste ratione adipisci? Repudiandae beatae, error excepturi nostrum possimus exercitationem dolores? Voluptatibus, ad? Non nulla amet nisi obcaecati, nobis blanditiis! Perspiciatis libero earum debitis sunt incidunt ut, esse eius minima molestiae quaerat, voluptate optio assumenda eligendi, omnis architecto nisi. Voluptates sit aspernatur asperiores voluptatem. Illo voluptas nulla odio voluptatem. Fuga obcaecati incidunt laboriosam in. Provident necessitatibus totam, atque laborum nobis corrupti facere a molestias eos earum possimus corporis doloremque beatae, itaque et pariatur quo eveniet officia dignissimos obcaecati soluta optio ipsam qui eligendi. Libero nulla veniam sed! Quos ex harum ducimus vero totam quibusdam ratione. Maxime iusto iure sapiente autem similique eum, mollitia minus asperiores et eaque recusandae, veritatis facilis fugit dolor est rem nemo culpa veniam illum? Aspernatur unde ratione dolorum doloribus facere odit, dolor totam voluptatum accusantium perspiciatis numquam nam quod minus repellat a nulla natus inventore laborum ipsum! Eius impedit cum consequuntur expedita, cupiditate quas quidem quo vero earum, dolore esse? Eveniet at molestias officiis delectus optio fugiat quod quaerat asperiores laudantium quidem odio facere hic accusantium expedita quos reprehenderit qui, sapiente voluptates quia itaque autem temporibus incidunt ipsa. Odio vel quam aut eum illo optio, eligendi repellat voluptas eos sit itaque voluptates fugit minima quaerat laborum nisi illum consequatur impedit! Eaque atque est id repellendus cumque nisi officiis iusto ab vel consequuntur corrupti odit, illo magnam ipsa, sunt, unde veritatis esse praesentium doloribus non! Veritatis sunt quibusdam, quam ea, adipisci voluptatibus quisquam corporis omnis quasi nostrum ex consequatur totam quo cupiditate expedita iusto at doloremque voluptates nemo iste, ipsa consectetur perferendis! Ducimus labore, soluta doloremque harum tempore adipisci recusandae placeat. Quis cum doloremque distinctio aut illo quidem ipsa voluptates sequi libero, nulla iste qui temporibus dolorem recusandae minima natus unde deserunt pariatur. Architecto reiciendis animi et dolor facere temporibus repellat ullam ut, cupiditate obcaecati corporis labore mollitia, quo odit provident? Rem facere labore doloribus aut voluptates. Laudantium iusto eaque ipsa corrupti recusandae veniam ullam nulla corporis modi sunt, magnam, labore inventore quae vel iure, minima at debitis. Sed impedit asperiores aut fugit dolores debitis odit officia molestiae modi minima necessitatibus totam, alias eum eos laboriosam inventore sequi soluta vel ipsum nostrum neque, placeat esse, a ab. Ratione, facilis perferendis. Quo quaerat inventore asperiores nostrum placeat odit aspernatur minus rerum cupiditate deleniti ab veniam assumenda, iure consequatur quod rem eos quisquam vitae mollitia harum. Aliquid, fugit perferendis consequatur recusandae necessitatibus neque omnis doloribus exercitationem deleniti expedita a dolorum porro delectus architecto sunt cumque maiores numquam repellat, est nemo voluptas laborum? Saepe esse repellat repudiandae illum odit labore necessitatibus ipsam similique fuga voluptatem odio omnis eligendi, nihil iste facere ducimus provident eius tenetur sunt nisi. Rerum ad eligendi hic iusto consequatur temporibus earum similique molestiae incidunt adipisci praesentium quia culpa iste, impedit delectus alias, sapiente in obcaecati sed repellendus quos deserunt repudiandae atque distinctio! Fuga voluptates quos repellendus magni veniam perspiciatis dolorum quae. Quos inventore consectetur a optio nihil, ipsam libero dignissimos ipsa facere nesciunt porro corrupti tempora, saepe sunt distinctio quas quae quis architecto quasi modi! Quasi vel veniam totam nobis commodi quos, at veritatis dolorum, nostrum nihil ab beatae aliquid tempore eos saepe dicta alias? Cumque tenetur autem sapiente eligendi nulla recusandae distinctio doloremque voluptatibus tempora veniam reprehenderit voluptates quia expedita blanditiis fuga dolorem nostrum eaque veritatis debitis, assumenda porro officiis? Omnis sed laboriosam sapiente aut minus. Pariatur dolorum nihil nam ullam eligendi laudantium asperiores illo alias, perferendis adipisci vitae earum aut a dolores officia necessitatibus! Cum obcaecati, perspiciatis quo laudantium deleniti quae qui dicta odio pariatur dolores commodi voluptatibus aspernatur culpa quibusdam repudiandae aliquam modi. Excepturi nulla quod velit hic provident labore possimus tempora ad minus recusandae facere, deleniti, dolor repudiandae! Error quidem repellat hic libero eaque placeat esse dignissimos autem quis veniam, ipsa nihil perferendis corrupti! Repellendus ex possimus quam ipsum fugiat laudantium. Earum repellat tenetur aliquam dicta quia ut, quos assumenda. Soluta unde saepe iure, nulla atque commodi vitae laborum a quasi qui voluptates dignissimos, architecto ipsa perspiciatis alias iste sapiente necessitatibus natus libero obcaecati harum. A assumenda facilis, rerum, tempora quisquam voluptatum porro eveniet laboriosam, quia ut iure ullam! Sapiente totam officia iure sunt porro animi deserunt nulla, exercitationem aut inventore tempore dolorum quos et ab ullam facilis? At consequatur et veritatis esse repellendus temporibus odio ut earum est. Illum unde voluptatibus quas animi inventore modi, suscipit minima. Enim corporis magnam aspernatur fuga facilis doloribus, saepe dignissimos officiis eius aperiam incidunt aliquid reprehenderit libero! Harum, quae officia! Quo repellat facere doloribus id quibusdam hic aliquid, repudiandae fugit, laborum voluptate voluptatibus eum libero enim? Voluptas enim asperiores, commodi saepe molestias, aliquam vel impedit eos harum, recusandae unde. Dicta deleniti velit omnis voluptatum similique dolores beatae saepe! Iste quisquam iusto consequatur odit, numquam exercitationem veniam eum sequi voluptatem. Doloremque corporis quibusdam inventore quisquam tenetur distinctio dolorem. Cupiditate, saepe mollitia est consectetur modi tenetur id. Numquam ex asperiores aliquam maiores praesentium reiciendis laboriosam deserunt culpa libero? Dignissimos fugiat eum nam culpa veniam, eligendi laborum non illo doloribus? Libero aspernatur aliquid reiciendis velit hic quisquam possimus asperiores harum cumque aliquam placeat illo neque obcaecati impedit, eius, omnis voluptate voluptatibus accusantium molestias sint cupiditate! Id maiores vel dolore velit unde necessitatibus atque qui et, labore at nihil inventore consequatur laborum dolores, nemo hic natus commodi, ratione excepturi. Cum totam similique excepturi doloremque quod fugit voluptatem voluptas suscipit provident in facere nulla at sapiente placeat deserunt optio culpa quidem id, doloribus voluptatibus corrupti fuga perspiciatis. Quo natus laborum molestiae nemo qui. Impedit, quasi ex? Voluptatibus, dolore a corporis cumque omnis aperiam! Expedita beatae nemo blanditiis tempore veniam atque ex, voluptatibus voluptates asperiores ea exercitationem harum consequatur, aliquid est rerum eveniet nesciunt hic autem, dignissimos quod odio esse non similique laudantium? Ea neque itaque, delectus mollitia, veniam quisquam ipsa nam provident eaque amet illum consequatur? Repellat ad illo officiis recusandae? Eaque quae dolorem optio veniam in, sequi nostrum consequatur!
                </Typography>
            </Fade>
        </>
    );
};

export default Mode;