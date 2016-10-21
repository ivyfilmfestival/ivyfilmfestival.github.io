#!/usr/bin/python
import sys
import csv
import json

if len(sys.argv) != 2:
	print 'Please input a CSV file.'

with open(sys.argv[1], 'rb') as csvfile:
	rows = csv.reader(csvfile, delimiter=',', quotechar='|')
	for row in rows:
		print row

f = sys.argv[1]

with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)
