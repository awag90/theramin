--Praxen
INSERT INTO theramin_prod.practice
(createdAt, updatedAt, id, name, street, streetnumber, zip, city, description)
VALUES(1682498443235, 1682498443235, 1, 'Bewegungs-Oase', 'Friedrichstraße', '101', '10117', 'Berlin', 'Die Praxis BewegungsOase befindet sich in der Innenstadt von Berlin. Das Team besteht aus erfahrenen Physiotherapeuten, die sich auf verschiedene Bereiche spezialisiert haben.
Die Praxis bietet eine breite Palette an Behandlungsmöglichkeiten, darunter manuelle Therapie, Krankengymnastik, Massage, Elektrotherapie und Akupunktur. Jeder Patient wird individuell untersucht und behandelt, um die bestmöglichen Ergebnisse zu erzielen.
Zusätzlich zu den regulären Behandlungen bietet die Praxis auch spezielle Programme an, wie zum Beispiel Rückenschule und Kurse zur Stärkung des Körpers und zur Verbesserung der Beweglichkeit. Diese Kurse werden von zertifizierten Trainern geleitet und sind für Menschen jeden Alters geeignet.
Die Praxis ist modern eingerichtet und verfügt über eine freundliche Atmosphäre, die dazu beiträgt, dass sich die Patienten während ihrer Behandlung wohl fühlen. Die Therapeuten sind engagiert und arbeiten eng mit den Patienten zusammen, um ihre Ziele zu erreichen und ihre Genesung zu fördern.');

INSERT INTO theramin_prod.practice
(createdAt, updatedAt, id, name, street, streetnumber, zip, city, description)
VALUES(1682499162412, 1682499162412, 7, 'Sprachzauber', 'Musterstraße', '22', '20095', 'Hamburg', 'Die Logopädie Praxis "Sprachzauber" ist eine moderne und freundliche Praxis, die auf Sprach-, Sprech-, Stimm- und Schluckstörungen spezialisiert ist. Die Praxis ist mit modernster Technologie ausgestattet, um die bestmögliche Diagnostik und Therapie anbieten zu können.
Das Team besteht aus erfahrenen und engagierten Logopäden, die regelmäßig an Fortbildungen teilnehmen, um auf dem neuesten Stand der Logopädie zu bleiben. Die Praxis legt großen Wert auf eine individuelle Betreuung und Beratung, um die Bedürfnisse und Ziele jedes Patienten bestmöglich zu erfüllen.
Die Räumlichkeiten sind barrierefrei zugänglich und bieten eine angenehme und entspannte Atmosphäre. Die Praxis befindet sich zentral in der Innenstadt von Hamburg und ist sowohl mit öffentlichen Verkehrsmitteln als auch mit dem Auto gut zu erreichen.');

INSERT INTO theramin_prod.practice
(createdAt, updatedAt, id, name, street, streetnumber, zip, city, description)
VALUES(1682499720198, 1682499720198, 10, 'Therapie am Durlesbach', ' Dreimühlenweg', '17', '88339', 'Bad Waldsee', 'In der naturnahen Umgebung, direkt am Durlesbach, abseits von Hektik und Alltagsstress, finden Sie die Praxis für Physiotherapie, Ergotherapie und tiergestützte Therapie.
Wir unterstützen Sie gerne bei der Verwirklichung Ihrer medizinsch orientierten Heilungsprozesse und bei Ihren individuellen gesundheitlichen Zielen.
Die interdisziplinäre Zusammenarbeit von Physiotherapie und Ergotherapie bietet ein ganzheitliches Behandlungskonzept.');

--Therapeuten
INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname, practice, specialisation, `user`)
VALUES(1682500360971, 1682500360971, 'Pfänder', 'Rebecca', 10, 1, 6);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname, practice, specialisation, `user`)
VALUES(1682502187800, 1682502187800, 'Pfänder', 'Markus', 10, 1, 7);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname, practice, specialisation,`user`)
VALUES(1682502266841, 1682502266841,  'Pfänder', 'Calli', 10, 2, 8);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname, practice, specialisation,`user`)
VALUES(1682513536502, 1682513669805, 'Schmidt', 'Susanne', 1, 1, 9);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname,  practice, specialisation,`user`)
VALUES(1682513560040, 1682513722615, 'Planhotjuk', 'Frieda', 1, 1, 10);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname, practice, specialisation,`user`)
VALUES(1682513613252, 1682513613252, 'Lieb', 'Thomas', 7, 2, 11);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, name, firstname, practice, specialisation,`user`)
VALUES(1682513632539, 1682513644204, 'Schmidt', 'Susanne', 7, 3, 12);

--Arbeitszeiten
INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513715904, 1682513715904, 1, 'monday', '08:00:00', '15:00:00', 5);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513715971, 1682513715971, 2, 'wednesday', '08:00:00', '15:00:00', 5);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513715959, 1682513715959, 3, 'tuesday', '09:00:00', '17:00:00', 5);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513715985, 1682513715985, 4, 'friday', '08:00:00', '15:00:00', 5);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513749881, 1682513749881, 5, 'monday', '09:00:00', '17:00:00', 6);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513749886, 1682513749886, 6, 'wednesday', '09:00:00', '17:00:00', 6);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513749891, 1682513749891, 7, 'thursday', '09:00:00', '17:00:00', 6);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513749900, 1682513749900, 8, 'tuesday', '09:00:00', '17:00:00', 6);

INSERT INTO theramin_prod.worktime
(createdAt, updatedAt, id, weekday, `from`, till, therapist)
VALUES(1682513749902, 1682513749902, 9, 'friday', '09:00:00', '17:00:00', 6);

--Appointment
INSERT INTO theramin_prod.appointment
(createdAt, updatedAt, `date`, `from`, till, indication, patient, therapist)
VALUES(1682500360971, 1682500360971, '2023-05-29', '08:00:00', '08:30:00', 'Rückenschmerzen',3 , 2);
INSERT INTO theramin_prod.appointment
(createdAt, updatedAt, `date`, `from`, till, indication, patient, therapist)
VALUES(1682500360971, 1682500360971, '2023-06-05', '08:00:00', '08:30:00', 'Rückenschmerzen',3 , 2);

--Patient
INSERT INTO theramin_prod.patient
(createdAt, updatedAt, dob, name, firstname, `user`)
VALUES(1682513536502, 1682513536502, '31.03.2000', 'Blanco', 'Nik', 10);



