import re
import xml.etree.ElementTree as ET

txt = open("fall2014.txt")

catalog = ET.Element("catalog")
lastSubject = ""
lastCourse = ""
count = 8
for line in txt:
	if re.match("([A-Z]+)\s\d\d\d.+[.][.][.]", line):
		
		words = line.split(" ")
		subjectCode = words[0]
		courseNumber = words[1]
		print(str(subjectCode) + " " + str(courseNumber))
		
		if subjectCode != lastSubject:
			subject = ET.SubElement(catalog, "subject")
			code = ET.SubElement(subject, "code")
			code.text = str(subjectCode)
			lastSubject = subjectCode
		if courseNumber != lastCourse:
			course = ET.SubElement(subject, "class")
			number = ET.SubElement(course, "number")
			number.text = str(courseNumber)
			lastCourse = courseNumber
		
		
		#print(line)
	if re.match("[A-Z][a-z.]* [A-Z][a-z.]*$", line) or re.match("[A-Z][a-z.]* [A-Z][a-z.]* [A-Z][a-z.]*$", line):
		if not re.match("Dept\. Consent", line) and not re.match("Management Computer Systems", line) and not re.match("Instructor Consent", line) and not re.match("Criminal Justice", line) and not re.match("African American Studies", line) and not re.match("Chicano Studies", line) and not re.match("General Education", line) and not re.match("GENERAL EDUCATION", line):
			
			line.replace("OFF CAMPUS", "")
			words = line.split(" ")
			if len(words) > 1:
				first = words[0]
				middle = ""
				if len(words) == 2:
					last = words[1]
				else:
					middle = words[1]
					last = words[2]
				
				print(str(first) + " " + str(middle) + " " + str(last))
				
				teacher = ET.SubElement(course, "teacher")
				firstName = ET.SubElement(teacher, "firstName")
				firstName.text = str(first)
				if middle != "":
					middleName = ET.SubElement(teacher, "middleName")
					middleName.text = str(middle)
				lastName = ET.SubElement(teacher, "lastName")
				lastName.text = str(last)
			
			
			#print(line)
			
		
	
tree = ET.ElementTree(catalog)
tree.write("fall2014.xml")
