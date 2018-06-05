//
//  ContactDetailViewController.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 31/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

class ContactDetailViewController: UIViewController {

    @IBOutlet weak var contactView: ContactView!
    
    var contact: Contact?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupView()
    }
    
    func setupView() {
        contactView.contact = contact
    }
    
    @IBAction func editContact(_ sender: Any) {
        if let saveContact = R.storyboard.main.saveContactViewController(), let contact = contact {
            saveContact.originalContact = contact
            self.navigationController?.pushViewController(saveContact, animated: true)
        }
    }
    
}
