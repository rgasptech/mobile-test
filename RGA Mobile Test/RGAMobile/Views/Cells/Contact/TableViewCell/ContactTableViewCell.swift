//
//  ContactTableViewCell.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 31/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import Reusable
import SDWebImage

class ContactTableViewCell: UITableViewCell, NibReusable {

    @IBOutlet weak var contactView: ContactView!
    
    var contact: Contact? {
        didSet {
            setupCell()
        }
    }
    
    func setupCell() {
        contactView.contact = contact
    }
}
