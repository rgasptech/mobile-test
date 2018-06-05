//
//  ContactListViewModel.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 31/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import RxSwift
import RealmSwift
import RxRealm

class ContactListViewModel: NSObject {

    fileprivate let disponseBag = DisposeBag()
    
    var contactListObserver: Observable<[Contact]> {
        return fullContactList.asObservable()
    }
    
    private let contactsListImpl = ContactListServiceImpl()
    private let localContactList = Variable<[Contact]>([])
    let fullContactList = Variable<[Contact]>([])
    let searchTerm = Variable<String>("")
    
    override init() {
        super.init()
        self.bindViewModel()
    }
    
    func fetchContacts() {
        contactsListImpl.fetchContacts {[weak self] (resultContacts) in
            switch resultContacts {
            case .success(let contacts):
                for contact in contacts{
                    ContactRepository.saveLocalContact(contact: contact)
                }
                self?.setupRepositoryChanges()
                
            case .error(_):
                print("")
                //TODO: Notify error to controller
            }
        }
    }
    
    func fetchLocalContacts() {
        let localContact = ContactRepository.fetchLocalContacts()
        if localContact.count == 0 {
            fetchContacts()
        }
        
        localContactList.value = localContact
    }
    
    private func bindViewModel() {
        Observable.combineLatest(localContactList.asObservable(), searchTerm.asObservable()) { (localContactList, searchTerm)  in
            
            let filteredContactList = localContactList.filter { contact in
                let lowerTextCase = searchTerm.lowercased()
                
                if lowerTextCase == "" {
                    return true
                }
                
                return contact.name.lowercased().contains(lowerTextCase) ||
                    contact.email.lowercased().contains(lowerTextCase) ||
                    contact.bio.lowercased().contains(lowerTextCase)
            }
            
            return filteredContactList
            
            }.bind(to: fullContactList)
            .disposed(by: disponseBag)
    }
    
    func setupRepositoryChanges() {
        do {
            let realm = try Realm()
            let contactCollection = realm.objects(Contact.self)
            Observable.collection(from: contactCollection).subscribe(onNext: { [weak self] contactList in
                self?.fetchLocalContacts()
            }).disposed(by: disponseBag)
            fetchLocalContacts()
        } catch {}
    }
}
