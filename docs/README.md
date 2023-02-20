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

Coding framework with four main categories:
- patient data
- patient representation
- diagnoses
- setting

Analyzed 66 VP and compared the results with data from the existing healthcare system

match curricular objectives of common symptoms, train clinical reasoning skills, and complement the face-to-face courses. 

#### 4.  **COMET**

- Collaborative intelligent tutoring system
- Multi-modal interface that integrates text and graphics 
- Generate tutorial hints to guide group problem
- Shared workspace (sketches and medical images)
- Students from diverse locations can participate

 Four primary components
 
 1. Student multimodal interface
     - hypothesis board.
     - chat pane 
     - image pane

 2. Medical concept repository
 3. Student clinical reasoning model
 4. Tutoring module.


## Methodology

## Experiment Setup and Implementation

Thirty three third year dentistry  students in a four-year program were assigned randomly in a Virtual Patient (VP) (18) and a Small Group Teaching (SGT)  group (15) which was regarded as a control group. The study was conducted on a voluntary basis, and a written informed consent was obtained prior to the participation with the right to withdraw at any time. Throughout the instructional approaches, the students were unaware of their study group affiliation. Following figure shows the study design for the feedback evaluation.


![Experiment Setup and Implementation](./images/Study_design_and_feedback.png)

## Results and Analysis

#### Study participation
Prior to the test, a questionnaire was given to get the user characteristics of the students and do a self-assessment. The first aim was to identify each student separately. For that students were assigned random codes. All the students were in the same semester. It was semester 6. Using students from the same semester helped to avoid the bias that may happen due to the technical knowledge difference in a clinical case during the experiment. For the experiment, 21 Female students and 14 Male students participated. Due to technical issues, 2 students’ records can not be used for future investigation. So the usable sample count is 33. None of the students had good exposure to these types of virtual patient systems. The average history-taking rate is 3.486. The average rate of confidence in patient assessment according to the patient’s presentation is 3.429.

#### Outcome measures
The Objective Structured Clinical Examination (OSCE) is a widely used assessment method in the field of dentistry. Two OSCE exams were held before and after the experiment. The exam was graded from 1 to 100. Then the mean values, standard deviations and p-values were calculated. The table 1 shows the values obtained. In the case initial we decide our null hypothesis as our VP can perform well as the traditional clinical procedure. To prove that it can not be neglected, the p-values were calculated and it is in table 2. According to these statistical values, both the control group and the VP group have performed in a similar manner. Their mean and standard deviation values do not have any significant difference in both pre and post-OSCE. Moreover, p-values are greater than 0.5. This means that the initial hypothesis, that the VP system can perform well as the traditional clinical procedure is not neglectable.

![outcome](https://github.com/cepdnaclk/e16-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry/blob/main/docs/images/grade_result_tables.png)

#### Students feedback review

After the test, two questionnaires were given to get user feedback about the system and user feedback about the overall experience.After the test, these questionnaires were only given to the students who interacted with the Virtual Patient Simulator.
 
Overall, students felt better prepared to diagnose (mean  = 2.78, SD = 2.78 ± 1.166125). Students felt that working on the VP cases is better and enjoyable than learning with real patients (mean  = 2.93, SD = 2.93 ± 1.197377) and found this motivates further self-learning (mean  = 2.81, SD = 2.81 ± 1.46745). The direct feedback that was given within the VP cases was felt to be sufficient (mean  = 3.68, SD = 3.68 ±1.138347). Students also found that case completion develops skills in decision making (mean  = 2.72, SD = 2.72 ± 1.206045). In particular, the detailed structure, the multi-media environment, the individual learning pace and the option to repeatedly work on cases was commended. However, students only partially found that working on the VP cases felt like making real life clinical decisions (mean  = 3.12, SD = 3.12 ±1.078193). As the overall case work up students have given mean of 3.12. 

## Conclusion
Virtual patient systems for dentistry are virtual learning platforms that replicate various aspects of real-world dental practice. These systems can be used to train dental students, assess the competency of dental professionals, and provide patients with a realistic preview of dental procedures. This study shows how successful the development of our virtual patient simulator. The system evaluation was done in a controlled environment.


## Publications
[//]: # "Note: Uncomment each once you uploaded the files to the repository"

<!-- 1. [Semester 7 report](./) -->
<!-- 2. [Semester 7 slides](./) -->
<!-- 3. [Semester 8 report](./) -->
<!-- 4. [Semester 8 slides](./) -->
<!-- 5. Author 1, Author 2 and Author 3 "Research paper title" (2021). [PDF](./). -->


## Links

[//]: # ( NOTE: EDIT THIS LINKS WITH YOUR REPO DETAILS )

- [Project Repository](https://github.com/cepdnaclk/e16-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Project Page](https://cepdnaclk.github.io/e16-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # "Please refer this to learn more about Markdown syntax"
[//]: # "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
