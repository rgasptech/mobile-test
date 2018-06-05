//
//  Contact.swift
//  RGA Mobile Test
//
//  Created by Gerlandio Da Silva Lucena on 31/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import RealmSwift

class Contact: Object,  Codable {
    @objc dynamic var contactID = UUID().uuidString
    @objc dynamic var name = ""
    @objc dynamic var email = ""
    @objc dynamic var born = ""
    @objc dynamic var bio = ""
    @objc dynamic var photo = ""
    
    override static func primaryKey() -> String? {
        return "contactID"
    }
    
    private enum CodingKeys: String, CodingKey {
        case name
        case email
        case born
        case bio
        case photo
    }
}
