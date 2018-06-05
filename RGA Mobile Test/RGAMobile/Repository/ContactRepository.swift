//
//  ContactRepository.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 02/06/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import RealmSwift

struct ContactRepository {

    static func fetchLocalContacts() -> [Contact] {
        do {
            let realmDatabase = try Realm()
            let localContactList = realmDatabase.objects(Contact.self)
            return Array(localContactList)
        } catch {
            return []
        }
    }
    
    @discardableResult static func saveLocalContact(contact: Contact) -> Bool {
        do {
            let realmDatabase = try Realm()
            try realmDatabase.write {
                realmDatabase.add(contact)
            }
        } catch let error {
            print(error.localizedDescription)
            return false
        }
        
        return true
    }
    
    @discardableResult static func deleteLocalContact(contact: Contact) -> Bool {
        do {
            let realmDatabase = try Realm()
            try realmDatabase.write {
                realmDatabase.delete(contact)
            }
        } catch let error {
            print(error.localizedDescription)
            return false
        }
        
        return true
    }
    
    static func updateLocalContact(contact: Contact, originalContact: Contact) -> Bool {
        do {
            let realmDatabase = try Realm()
            try realmDatabase.write {
                originalContact.name = contact.name
                originalContact.email = contact.email
                originalContact.born = contact.born
                originalContact.bio = contact.bio
                originalContact.photo = contact.photo
            }
        } catch {
            return false
        }
        
        return true
    }
}
