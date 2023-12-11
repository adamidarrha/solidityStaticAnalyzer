#!/usr/bin/env python

import os

#python script to check if all the issues have their test contracts
#used for github action to see if all is accounted for (kind of like code coverage)

CONTRACT_FOLDER = "contracts"
SRC_ISSUES_FOLDER = "src/issues"

def get_filenames(folder):
    filenames = set()
    for root, dirs, files in os.walk(folder):
        for file in files:
            # Exclude file extensions
            filenames.add(os.path.splitext(file)[0])
        for dir in dirs:
            get_filenames(dir)#gets all files in folders recursivly
    return filenames

def check_filenames():

    #get all contracts and issues and compare them
    contracts_files = get_filenames(CONTRACT_FOLDER)
    src_issues_files = get_filenames(SRC_ISSUES_FOLDER)

    #debug the folders with this
    #print("contract files: ", contracts_files)
    #print("src issues files: ", src_issues_files)

    #if didn't find the same contracts as issues will fail signaling to gthub action a fail
    if set(contracts_files) != set(src_issues_files):
        print("Error: Not all issues have test contracts, create test contracts for all issues.")
        exit(1)

if __name__ == "__main__":
    check_filenames()
