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
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682500360971, 1682500360971, 1, 'Rebecca', 'Pfänder', 1, 10, 2);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682502187800, 1682502187800, 3, 'Pfänder', 'Markus', 0, 10, 1);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682502266841, 1682502266841, 4, 'Pfänder', 'Calli', 0, 10, 4);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682513536502, 1682513669805, 5, 'Schmidt', 'Susanne', 1, 1, 1);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682513560040, 1682513722615, 6, 'Planhotjuk', 'Frieda', 1, 1, 1);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682513613252, 1682513613252, 7, 'Lieb', 'Thomas', 1, 7, 3);

INSERT INTO theramin_prod.therapist
(createdAt, updatedAt, id, name, firstname, isAdmin, practice, specialisation)
VALUES(1682513632539, 1682513644204, 8, 'Schmidt', 'Susanne', 0, 7, 3);

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




