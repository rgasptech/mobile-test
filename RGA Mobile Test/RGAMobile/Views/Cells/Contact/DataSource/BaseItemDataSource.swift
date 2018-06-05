//
//  BaseItemDataSource.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 30/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

class BaseItemDataSource<item>: NSObject, UITableViewDataSource {
    
    var itemList: [item]?
    weak var tableView: UITableView?
    var identifier: String{ get { return String(describing: UITableViewCell.self) } }
    
    required init(listItem: [item], tableView: UITableView) {
        itemList = listItem
        self.tableView = tableView
        super.init()
        setupTableView()
    }
    
    func setupTableView() {
        ///Implementar na subclasse
    }
    
    func setupTableViewCell(cell: UITableViewCell, forIndexPath: IndexPath) {
        ///Implementar na subclasse
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return itemList?.count ?? 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: identifier, for: indexPath)
        setupTableViewCell(cell: cell, forIndexPath: indexPath)
        return cell
    }
}
