//
//  ViewController.swift
//  RGA Mobile Test
//
//  Created by Gerlandio Da Silva Lucena on 27/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import RxSwift
import RxCocoa

class ViewController: UIViewController {

    fileprivate let disponseBag = DisposeBag()
    
    @IBOutlet weak var contactTableView: UITableView!
    @IBOutlet weak var searchContactTerm: UISearchBar!
    
    var contactListViewModel = ContactListViewModel()
    var contactDataSource: ContactListDataSource?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        bindUI()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        contactListViewModel.fetchLocalContacts()
    }
}

extension ViewController {
    
    func setupController(fullContactList: [Contact]) {
        contactDataSource = ContactListDataSource(listItem: fullContactList, tableView: self.contactTableView)
        contactTableView.dataSource = contactDataSource
        contactTableView.reloadData()
    }
    
    func bindUI() {
        contactListViewModel.contactListObserver.subscribe(onNext: { [weak self] contactList in
            self?.setupController(fullContactList: contactList)
        }).disposed(by: disponseBag)
        
        searchContactTerm.rx.text
            .orEmpty
            .bind(to: self.contactListViewModel.searchTerm)
            .disposed(by: disponseBag)
    }
    
    @IBAction func openSaveContact(_ sender: Any) {
        if let saveContact = R.storyboard.main.saveContactViewController() {
            self.navigationController?.pushViewController(saveContact, animated: true)
        }
    }
}

extension ViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        let contact = contactListViewModel.fullContactList.value[indexPath.row]
        if let detailContact = R.storyboard.main.contactDetailController() {
            detailContact.contact = contact
            self.navigationController?.pushViewController(detailContact, animated: true)
        }
    }
    
    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let deleteAction = UITableViewRowAction(style: .default, title: "Excluir", handler: { [weak self] (action, indexPath) in
            if let contact =  self?.contactListViewModel.fullContactList.value[indexPath.row] {
                if ContactRepository.deleteLocalContact(contact: contact) {
                    self?.contactListViewModel.fetchLocalContacts()
                }
            }
        })
        deleteAction.backgroundColor = UIColor.red
        
        return [deleteAction]
    }
}

