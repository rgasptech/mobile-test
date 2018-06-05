//
//  UIImage+Extension.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 01/06/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

extension UIImage {
    
    func saveLocalImage(imageName: String? = nil) -> String? {
        let uuidString = (imageName ?? UUID().uuidString) + ".png"
        if let data = UIImagePNGRepresentation(self), let document = String.documentsDirectory() {
            
            let filename = document.appendingPathComponent(uuidString)
            try? data.write(to: filename)
            
            return String(describing: filename)
        }
        
        return nil
    }

}
