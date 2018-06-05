//
//  ContactListDataSource.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 31/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

class ContactListDataSource: BaseItemDataSource<Contact> {
    
    override var identifier: String{ get { return String(describing: ContactTableViewCell.self) } }
    
    override func setupTableView() {
        tableView?.register(cellType: ContactTableViewCell.self)
    }
    
    override func setupTableViewCell(cell: UITableViewCell, forIndexPath indexPath: IndexPath) {
        if let cellContact = cell as? ContactTableViewCell {
            cellContact.contact = itemList?[indexPath.row]
        }
    }
}
