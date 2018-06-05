//
//  ContactView.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 02/06/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

class ContactView: UIView {

    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var emailLabel: UILabel!
    @IBOutlet weak var bornLabel: UILabel!
    @IBOutlet weak var photoImageView: UIImageView!
    @IBOutlet weak var bioLabel: UILabel!
    
    var contact: Contact? {
        didSet {
            setupView()
        }
    }
    
    func setupView() {
        nameLabel.text = contact?.name ?? ""
        emailLabel.text = contact?.email ?? ""
        bornLabel.text = contact?.born ?? ""
        bioLabel.text = contact?.bio ?? ""
        
        if let contactPhoto = contact?.photo, contactPhoto.isLocalDirectory() {
            self.photoImageView.image = contactPhoto.imageFromPath()
        } else if let avatar = contact?.photo, let urlAvatar = URL(string: avatar) {
            self.photoImageView.sd_setImage(with: urlAvatar, placeholderImage: R.image.avatar())
        }
    }
}
