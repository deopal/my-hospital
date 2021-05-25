import React from 'react';

import './about.css';
import img1 from "../../assets/images/about/about_1.jpg";
import img2 from "../../assets/images/about/about_2.jpg";
import img3 from "../../assets/images/about/about_3.jpg";
import img4 from "../../assets/images/about/about_4.jpg";
import { Card ,Image} from 'react-bootstrap';



export default function about(){


    return(
        <React.Fragment>
        <div className="mains">
            <div className="row p-2 m-auto">
            <div className="col-sm-12 col-lg-6 img p-4 m-auto">
                <Image src={img1} className="m-auto img img-fluid"  />
                </div>
                <div className="col-sm-12 col-lg-6 m-auto p-4">
                <Card className="p-2 h-100 m-auto" >
                <Card.Body >
                <Card.Title className="head"><h2>Abdominal Pain and Gastric problems</h2></Card.Title>
                <p>The abdomen is the area that falls between your chest and pelvis that is commonly referred to as your belly. 
                It consists of stomach, liver, small intestine, large intestine, gallbladder, spleen, kidneys, diaphragm, and pancreas among other organs. 
                The front of the abdomen consists of a tissue layer known as fascia, and the back of the abdomen consists of spine and back muscles. 
                Blood vessels are connected with the abdomen, mainly theinferior vena cava and aorta and its branches.There are three types of abdominal pain that you can experience; cramp-like, localized, or colicky.
                Mild abdominal pain usually subsides without any treatment. But it is still a good idea to contact your doctor if you have abdominal pain which is recurrent and disturbing because it can indicate other health issues. 
                You should see your doctor when you have any of the following problems in addition to abdominal pain.
                </p>
                </Card.Body>
                </Card>
                </div>
               
            </div>
            <hr />

            <div className="row p-4">
            
                <div className="col-sm-12 col-lg-6 p-4">
                <Card className="p-2 h-100 m-auto">
                <Card.Body >
                <Card.Title className="head"><h2>Dengue</h2></Card.Title>
                
                <p>Dengue is a virus-based infection majorly predominant in the tropical regions of the world. 
                    The female Aedes mosquito is the vector that transmits dengue causing virus cells from infected people to healthy 
                    people through blood-sucking bites. The virus then transfers from the vector and enters the host to rapidly reproduce
                     dengue causing virus. Dengue is commonly classified in 4 different serotypes, which are: DENV 1, DENV2, DENV3, and 
                     DENV4. DENV 3, and 4 are the most occurring forms of the virus. These serotypes belong to the genus Flavivirus. 
                     Outbursts of Dengue are commonly recorded in the Indian Subcontinent, south-east Asia, southern China, Taiwan, 
                     few countries in Central and South America, a few islands in the Caribbean, Mexico, and Africa.

                    The infestation of these disease occurring agents is commonly found near open drains, stagnant water bodies,
                     marshy lands, and human-inhabited locations. 2007 to 2009 has witnessed major Dengue outbreaks in various parts of
                      the world with an alarming mortality rate of 50% in a short period. Once the DENV serotype is introduced into a new
                       host from a viremic source, the serotype attacks the Dendritic cells, Langerhans cells, and Skin-Dendritic cells. 
                       Dendritic cells of all the other cells are important as they form a direct route for the pathogen to access and 
                       affect the lymph nodes, thereby compromising the adaptive immune responses of the host. Researchers and doctors 
                       are constantly trying to create a vaccine for Dengue.
                </p>
                </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-lg-6 img p-4 m-auto">
                <Image src={img2} className="m-auto img img-fluid" />
                </div>
               
            </div>

            <hr />

            <div className="row p-4">
            <div className="col-sm-12 col-lg-6 img p-4 m-auto">
                <Image src={img3} className="m-auto img img-fluid"  />
                </div>
                <div className="col-sm-12 col-lg-6 p-4">
                <Card className="p-2 h-100 m-auto" >
                <Card.Body >
                <Card.Title className="head"><h2>Weight Loss/Bariatric Surgery</h2></Card.Title>
                
                <p>Bariatric surgery is nothing but the common term collectively used for many types of weight-loss surgeries. 
                    These surgeries make changes to your digestive system to help you lose weight. They either limit the amount of food 
                    you can intake or reduce your ability to absorb nutrition and in some cases both.

                    Such types of surgeries are done when diet or exercise plans have not worked out for the person and when the person 
                    has some serious health condition as a result of their weight. Gastric bypass is the most common type of bariatric 
                    surgery and most surgeons prefer this surgery as it usually has fewer complications than other weight-loss surgeries do.

                    These surgeries generally pose major risks and side effects and the patient has to make changes to their diet 
                    permanently and also schedule a fixed exercise regime so that they can ensure the lasting success of bariatric 
                    surgeries.
                </p>
                </Card.Body>
                </Card>
                </div>
               
            </div>

            <hr />

            <div className="row p-4">
            
                <div className="col-sm-12 col-lg-6 p-4">
                <Card className="p-2 h-100 m-auto " >
                <Card.Body >
                <Card.Title className="head"><h2>Migraine Headaches</h2></Card.Title>
                
                <p>Migraine is generally confused with a normal headache, however the severity of the two are incomparable. 
                    Migraine presents with a host of other debilitating symptoms such as nausea, vomiting, sensitivity to loud sounds and 
                    lights and general discomfort. A migraine is typically characterized as a one sided throbbing headache that doesn’t go
                     away quickly.There are four stages in which you might experience the migraine and the symptoms for each vary. 
                     However, just because you have a migraine does not mean that you necessarily will go through all the stages and 
                     exhibit all the migraine symptoms. You might experience some of the symptoms and not others. Here are some of the 
                     common headache migraine symptoms particular to each migraine stage.
                </p>
                </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-lg-6 imgs p-4 m-auto">
                <Image src={img4} className="m-auto img img-fluid"  />
                </div>
               
            </div>
        </div>
        </React.Fragment>
    );
}