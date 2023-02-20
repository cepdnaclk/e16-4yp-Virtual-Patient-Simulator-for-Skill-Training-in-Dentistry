---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e16-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry
title: Virtual Patient Simulator for Skill Training in Dentistry
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Virtual Patient Simulator for Skill Training in Dentistry

#### Team

- E/16/086, Dharmathilaka A.L.V.H., [email](mailto:e16086@eng.pdn.ac.lk)
- E/16/156, Jaythilaka H.A.D.T.T., [email](mailto:e16156@eng.pdn.ac.lk)
- E/16/223, Madushanki K.H.H.C., [email](mailto:e16223@eng.pdn.ac.lk)

#### Supervisors

- Prof. Roshan G. Ragel, [email](mailto:roshanr@eng.pdn.ac.lk)
- Dr. Upul Jayasinghe , [email](mailto:upuljm@eng.pdn.ac.lk)
- Dr. D Leuke Bandara , [email](mailto:dhanulb@dental.pdn.ac.lk)

#### Table of content

1. [Abstract](#abstract)
2. [Related works](#related-works)
3. [Methodology](#methodology)
4. [Experiment Setup and Implementation](#experiment-setup-and-implementation)
5. [Results and Analysis](#results-and-analysis)
6. [Conclusion](#conclusion)
7. [Publications](#publications)
8. [Links](#links)

---

## Abstract
Explore the potential of integrating Virtual Reality (VR) and Artificial Intelligence (AI) techniques to increase the effectiveness of skill training in dentistry by providing personalised instruction, assessment and formative feedback in a form and on a scale not possible in the physical world. The systems being built promise to provide dental students with an increased amount of guided practice at a relatively low cost.

## Related works

Haptic-based simulators and non-haptic based simulators are both used in dentistry for skill training and development.

Haptic-based simulators provide a realistic sense of touch and force feedback, allowing students to practice procedures with a level of tactile sensation similar to that experienced during actual dental procedures. On the other hand, non-haptic-based simulators typically use computer graphics and animation to simulate dental procedures. These simulators offer a lower level of realism in terms of tactile sensation and force feedback, but they can still provide valuable training for students in a safe and controlled environment. Non-haptic simulators are typically less expensive than haptic-based simulators, making them more accessible for educational institutions with limited budgets. Few Example systems are described below.

#### 1. **The system (Web-SP)**

Web-SP (Web-based Simulation of Patients) is a general virtual patient (VP) simulation system developed at Karolinska Institutet, Sweden (14, 18).
Twenty-four VPs were created by the senior course director using the Web-SP built-in web-based authoring environment.


Web-SP is divided into the following sections:
- patient introduction
- patient interview
- physical examination
- labs/X-rays
- diagnosis
- therapy
- feedback

There are two types of feedback available to students in WebSP:
- constructive

Constructive feedback is an automatically generated checklist that matches and compares student recommendations to expert recommendations. Constructive feedback is provided for students’ activities in the explorative phase of the case review and for parts of students’ periodontal, caries registration, endodontic diagnostic activity.

- neutral

Neutral feedback is an automatically generated display of expert opinion and recommendations but does not provide any comparison between students and experts.

#### 2.  **Virtual World Problem**

Virtual world is a system which mainly has addressed two research questions. One is whether the 3D environment provides greater interaction to the student than image and test-based PBL patient cases while the other one is whether the same virtual patient case handling is done by several groups individually and simultaneously.

##### Features
- Student is virtually present as avtar.
- Clinical room is virtually made with virtual patient.
- Concurrent group practicals can be held.
- Chat feature to chat with the patient.
- Selection menus when using the equipment.
- Tutor with a case-specific guide.

##### Feedbacks

- Equipment usage : For selected item, give drop down list choose the action and done that by simulator. Then display the result.
Interact with the patient.
- Typed questions can be asked from the patient and system will reply in the chat.

##### Technologies

###### Second Life (SL) (20) by Linden Labs
- Second Life is an online multimedia platform that allows people to create an avatar for themselves and have a second life in an online virtual world.
- The platform principally features 3D-based user-generated content.
- A range of easy-to-use construction tools and a scripting language are provided by the publicly available software for the creation and editing of content in an environment
     
###### Chatbot

- For virtual patients,  through typed chat using “chatbot” functionality, “touchpoints” to initiate examinations, and equipment within the environment.
      
###### Holodeck tool

- For concurrent paracticals:
  - allowed to build both scenarios once only but replicate this in multiple locations
  - Holodeck tool in secondlife: allows you to rez a large variety of rooms or scenarios in limited space


#### 3.  **Virtual Patient Collection**

A Virtual Patient Collection can also be identified as another approach that uses a collection of 66 VP s instead of a single one. So the system tries to give experience to a variety of patients considering factors including age, gender, occupation, etc. Here the coding framework has been divided into four main categories as patient data, patient representation, diagnoses, and setting. After analyzing the VPs the results were compared with data from the existing healthcare system. This was support to match curricular objectives of common symptoms, train clinical reasoning skills, and to complement the face-to-face courses.

#### 4.  **COMET**

COMET is a combination of Intelligent Tutoring System (ITS) and computer-supported collaborative learning (CSCL). It is specifically developed for medical PBL where the system is designed for students to participate in skill training sessions remotely. COMET tries to make the students’ experience similar to human-tutored medical PBL sessions. When looking into the software architecture of the system, it is implemented as a Java client/server application. So that the students can access it via the internet or from a local area network. In addition, they can work as a group or any number of students can join the same session. To support students in collaborative learning and to build an effective communication channel between students, the system also contains different components.

 Four primary components
 
 1. Student multimodal interface
     - hypothesis board.
     - chat pane 
     - image pane

 2. Medical concept repository
 3. Student clinical reasoning model
 4. Tutoring module.

#### 5.  **Virtual Learning Environment (VLE)**

The VLE is specially designed for diagnosis and treatment planning in dentistry. It is a web-based database application. The application is divided into five different
sections. They are history taking, clinical examination, X-rays( Radiographs), diagnosis and feedback on the usage. 

In history taking, initially, the system gives a brief introduction in one sentence. The student can ask questions freely. Then in the clinical examination part students can ask for clinical images such as intraoral clinical images or a clinical examination such as bleeding on probing. The system provides figures, tables, and multimedia information like sounds, and video clips. Also, the system provides X-rays(Radiographs). The highlighted characteristic is the system provides a full-mouth radiographic chart including both bitewings and periapical X-rays. It lets students select and enlarge the space. After that, diagnosis, treatment planning, and prognosis can be done by the student as a free text. Finally, evaluation is done and the system gives feedback to the student. Moreover, student activities within the session are recorded.

#### 6.  **Virtual Patient via an Artificial Intelligence Chatbot**

This is an approach which has used integrated VPs with AI. A VP, named ‘Julia’ has been implemented with a conversational chatbot with AI. Five different categories have been identified to answer questions by the VP as Anamnes, Description of the pain, Relationship of the pain with stimuli, Previous dental treatments and Intraoral exploration. The system has the ability to identify different ways of asking the same question using natural language processing algorithms. Also, formal language has been used so that it has the ability to answer some questions that were even unrelated to the clinical case. In order for Julia to generate curiosity among the students and given the possibility that some questions were not focused on the clinical case, In addition, it also has the capability to understand the nuances of human language by learning through action and feedback.

At the beginning of the interaction with Julia, she introduces herself and the directions for the student will be given about the process. Julia is able to answer different questions about the current condition. Colloquial responses to intimate questions that were unrelated to the case were established in order to arouse students’ curiosity and redirect them. In case of reaching an incorrect diagnosis, Julia redirects the student.

#### 7.  **ALICE(Artificial Interface for Clinical Education)**

A Web-based IPS called ALICE enables students to move around a virtual environment in first-person view, much as in a video game. Also, ALICE is cost-free, accessible
to all interested teachers, and has a high rate of student acceptance. For the uniqueness of the system, a teaching module that replicates patients with complex oncological diseases was built. This provides the chance for students to use their newly acquired knowledge on virtual patients as well as to acquire knowledge.

#### 8.  **Virtual haptic-based simulators**

When considering virtual simulators in dentistry, several studies have considered implementing haptic-based virtual simulators. Although having good visual aids including 3D images provides an improved understanding of the students, still there is an imperfection without the tactile sensations. By using textual or verbal descriptions, tutors may not be able to provide accurate tactile sensations to the students. As a result, haptic-based simulators have been introduced as a solution. This will present a better measurement of the students’ performance while giving experiences very similar to real situations. Mainly these systems target practising clinical skills of the students. According to studies, they are cost-effective, require less maintenance, and do not require to replace the haptic devices frequently.

##### 1.  DentSim

One of the haptic-based simulators is the DentSim system. It is a computer-assisted dental simulator that provides simultaneous visual, audio and practical inputs for learning. As a haptic device, it contains a handpiece and a phantom head with an optical tracking camera. The motions made in the phantom head will send to the computer display. This helps to evaluate the student’s progress in the actual tooth preparation such as handpiece positioning, depth, wall an-
gle, retention, etc. Feedback from the system is displayed on the screen. This simulator makes intra-oral activities effective. Further, it reduces the time and cost needed in conventional clinical training.

##### 2.  MOOG Simodont Dental Trainer

The primary difference between MOOG Simodont Dental Trainer and the DentSim is that MOOG Simodont Dental Trainer does not contain a physical phantom head. It contains a display projecting the mouth and tooth of the VP as a stereo image on a mirror. The mirror is above the headpiece. The system provides tactile feedback to the student by vibrating or generating a counterforce to the student’s movement. Like in real scenarios, the student can apply a physical drill handle by wearing stereoscopic glasses, and spatial illusions. Also, the drill handle can generate haptic feedback depending on the virtually prepared material. (e.g., enamel, dentin, or pul) . So by different techniques, the system tries to give tactile feedback as much as possible.

##### 3.  PerioSim haptics

Another system is PerioSim haptics. The specialty is that it can be done in periodontal procedures. The system contains a high-performance PC, graphic card, and stereo glasses for 3D visualization. It mainly focuses on developing the ability to examine the subgingival surface, handle gingival tissues, or perform scaling and root planing. For that, 3D visualization of the human mouth is displayed on the screen.

#### 9.  **Virtual reality training simulator in tooth preparation practice**

Virtual reality training simulator (VRTS) in tooth preparation practice is a haptic-based system that is developed with Unity 3D in conjunction with an HTC Vive Pro VR
headset and a haptic controller. It is used for training the tooth preparation procedures. Mainly the system uses 3D medical images. The images such as oral scan, computer tomography(CT) are transfered to 3D images. Also maxillofacial and standard oral 3D models are implemented within the system.

## Methodology

The virtual patient web interface was designed including the main three phases of patient assessment in dentistry (History taking, Examination and Investigation, Diagnosis), so that it equals a main theoretical topic of the practical skills training in terms of content and learning objectives. Two completed VP cases were created following the above phases in order according to the design principles for VP cases. The figure shows the architecture of the designed system.

<p align="center" width="100%">
	<![system architecture](./images/system_architceture.png)>
</p>

After a successful login, a student is given the chance for the case selection from the given cases. Here each VP scenario presented an authentic web interface and included the questions and clarifications customized to the process of clinical reasoning. In addition, each case contained a 3D graphic of the intraoral view representing the defects providing the zoom in zoom out and 360 degree rotation. Furthermore, they consisted of numerous elements including drop-down-menus, multiple choice selections, text boxes etc  helping to create an efficient learning environment including multimedia. The construction of the cases followed a linear and non-dichotomous approach, but  the students could freely navigate back to previous case slides to look up relevant findings within the cases. In order to compensate for the absence of in-person guidance from a supervised physician at the clinic, the diagnostics and treatment options were provided in additional text-boxes (glossary), and multiple-choice questions were used. Correct answers were rewarded with positive marks while wrong answers led to negative marks followed by constructive feedback and detailed explanations regarding the various choices.


#### 1. **History Taking**

This phase mainly includes obtaining the patient’s history by allowing the students to ask questions from the VP regarding the selected case. A student was provided with a list of sections as History of the presenting complaint, Medical history, Habits, Plaque control, Dietary history, Previous dental treatments and Social history. A drop-down menu and once a section was selected the relevant questions were displayed on another drop-down menu. Once a question was chosen, the VP displayed the answers following the selected question. 

Here the marks were allocated for choosing the correct order of selecting the sections to ask the questions from the patient. The wrong orders were given negative marks. In addition, the questions in each section included both relevant and irrelevant questions to the selected case and selecting only the relevant questions were given positive marks while the choosing of irrelevant questions carried negative marks.

#### 2. **Examination**

Examination phase allowed the students to examine the patient using the intra oral view, extra oral view. The extra oral section described the physical appearance while the intra oral section consisted with the Intra Oral view, Periodic Screening, Soft Tissue Assessment, Hard Tissue Assessment and Gingival Assessment. The intraoral view was provided as a 3D model representing the defects of the teeth of the patient providing the zoom in zoom out and 360 degree rotation features so that the student can examine the tooth in a preferred scale and angles.

##### 2.1 3D modeling
3D modeling implementation for the intra oral view representation was first considered using game engines and the research was done to identify the most suitable approach for the web interface.
The 3D model was created with all the relevant features which should be included in a teeth set of different kinds of teeth, gum, tongue etc. According to a case restorations, cavities and discolorations were created in each model. A mirror tool was also created using Blender which is needed to get a better view of the front teeth set. In addition, implementation of zoom in and zoom out features were done in order to help the students to examine properly. 

The evaluations in the examination phase were done in Soft Tissue Assessment and Hard Tissue Assessment according to the answers provided by the student in the relevant assessment regarding the patient examination. The questions included tool selections, caries status and restorations status and plaque scores and bleeding scores calculation using the given charts.

#### 3. **Investigation**

This phase provided the students with various types of sources to investigate the patient. They included Radiograph, Haematological assessments and Sensibility recordings. Here the radiographs contained the types of Dental Panoramic Tomogram (DPT), intraoral periapical(IOPA), Bitewing and Cone-beam computed tomography (CBCT). Students could choose any given category and do their investigations accordingly.

#### 4. **Evaluation and Feedback**

Evaluation of the student was carried out using the criteria of Students’ individual behavior. The system evaluates the ability to choose adequate history questions, examination behavior including tools selection, identifying caries status and restorations status and calculating plaque scores and bleeding scores,  investigation method selection and Providing the correct answers for the questionnaire for diagnosis. In the investigation phase,  the student has to choose the correct lab tests and types of radiographs. Incorrect selections lead to negative marks This gives a sense of a real scenario since in a real scenario, students should not take unwanted investigation methods.  Other than that, weight-based marking criteria were also used in the evaluation.

This system contains a real-time feedback system. It gives detailed feedback on the student's behavior with suggestions and comments so that students can do self-assessments and improve their skills.
 

	
##### Testing evaluation with students
Thirty three third year dentistry  students in a four-year program were assigned randomly in a VP (18) and a Small Group Teaching (SGT)  group (15) which was regarded as a control group. The study was conducted on a voluntary basis, and a written informed consent was obtained prior to the participation with the right to withdraw at any time. Throughout the instructional approaches, the students were unaware of their study group affiliation. Basic information as age, sex and study duration were gathered via a questionnaire. Below figure shows the study design for the feedback evaluation. 



## Experiment Setup and Implementation

Thirty three third year dentistry  students in a four-year program were assigned randomly in a Virtual Patient (VP) (18) and a Small Group Teaching (SGT)  group (15) which was regarded as a control group. The study was conducted on a voluntary basis, and a written informed consent was obtained prior to the participation with the right to withdraw at any time. Throughout the instructional approaches, the students were unaware of their study group affiliation. Following figure shows the study design for the feedback evaluation.


![Experiment Setup and Implementation](./images/Study_design_and_feedback.png)

## Results and Analysis

#### Study participation
Prior to the test, a questionnaire was given to get the user characteristics of the students and do a self-assessment. The first aim was to identify each student separately. For that students were assigned random codes. All the students were in the same semester. It was semester 6. Using students from the same semester helped to avoid the bias that may happen due to the technical knowledge difference in a clinical case during the experiment. For the experiment, 21 Female students and 14 Male students participated. Due to technical issues, 2 students’ records can not be used for future investigation. So the usable sample count is 33. None of the students had good exposure to these types of virtual patient systems. The average history-taking rate is 3.486. The average rate of confidence in patient assessment according to the patient’s presentation is 3.429.

#### Outcome measures
The Objective Structured Clinical Examination (OSCE) is a widely used assessment method in the field of dentistry. Two OSCE exams were held before and after the experiment. The exam was graded from 1 to 100. Then the mean values, standard deviations and p-values were calculated. The table 1 shows the values obtained. In the case initial we decide our null hypothesis as our VP can perform well as the traditional clinical procedure. To prove that it can not be neglected, the p-values were calculated and it is in table 2. According to these statistical values, both the control group and the VP group have performed in a similar manner. Their mean and standard deviation values do not have any significant difference in both pre and post-OSCE. Moreover, p-values are greater than 0.5. This means that the initial hypothesis, that the VP system can perform well as the traditional clinical procedure is not neglectable.

![outcome](./images/grade_result_tables.png)

#### Students feedback review

After the test, two questionnaires were given to get user feedback about the system and user feedback about the overall experience.After the test, these questionnaires were only given to the students who interacted with the Virtual Patient Simulator.
 
Overall, students felt better prepared to diagnose (mean  = 2.78, SD = 2.78 ± 1.166125). Students felt that working on the VP cases is better and enjoyable than learning with real patients (mean  = 2.93, SD = 2.93 ± 1.197377) and found this motivates further self-learning (mean  = 2.81, SD = 2.81 ± 1.46745). The direct feedback that was given within the VP cases was felt to be sufficient (mean  = 3.68, SD = 3.68 ±1.138347). Students also found that case completion develops skills in decision making (mean  = 2.72, SD = 2.72 ± 1.206045). In particular, the detailed structure, the multi-media environment, the individual learning pace and the option to repeatedly work on cases was commended. However, students only partially found that working on the VP cases felt like making real life clinical decisions (mean  = 3.12, SD = 3.12 ±1.078193). As the overall case work up students have given mean of 3.12. 

## Conclusion
Virtual patient systems for dentistry are virtual learning platforms that replicate various aspects of real-world dental practice. These systems can be used to train dental students, assess the competency of dental professionals, and provide patients with a realistic preview of dental procedures. This study shows how successful the development of our virtual patient simulator. The system evaluation was done in a controlled environment.


## Publications
[//]: # "Note: Uncomment each once you uploaded the files to the repository"


1. [Semester 7 report](./Publications/review_final_group_16.pdf)
2. [Semester 7 slides](./Publications/End_presentation_semester7.pdf)
3. [Semester 8 report](./Publications/Method_Research_Article.pdf)
4. [Semester 8 slides](./Publications/Final_Presentation_January_2023.pdf)
<!-- 5. Author 1, Author 2 and Author 3 "Research paper title" (2021). [PDF](./). -->


## Links

[//]: # ( NOTE: EDIT THIS LINKS WITH YOUR REPO DETAILS )

- [Project Repository](https://github.com/cepdnaclk/e16-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Project Page](https://cepdnaclk.github.io/e16-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # "Please refer this to learn more about Markdown syntax"
[//]: # "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
