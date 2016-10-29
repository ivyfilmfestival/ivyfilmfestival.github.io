#!/usr/bin/python
import sys
import csv
import json

if len(sys.argv) != 2:
	print 'Please input a CSV file.'

press = []
with open(sys.argv[1], 'rb') as csvfile:
	rows = csv.reader(csvfile, delimiter=',', quotechar='|')
	for row in rows:
		if len(row) == 2:		
			press_event = {}
			press_event['title'] = row[0]
			press_event['link'] = row[1]
			press.append(press_event)
		else:
			'Found row of incorrect size'

f = sys.argv[1]

with open('data-test.json', 'w') as outfile:
    json.dump(press, outfile)
