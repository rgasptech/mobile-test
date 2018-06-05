//
//  String+Extension.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 03/06/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

extension String {

    func toDate() -> Date? {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "dd/MM/yyyy"
        return dateFormatter.date(from: self)
    }
    
    static func documentsDirectory() -> URL? {
        let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        return paths.first
    }
    
    func isLocalDirectory() -> Bool {
        return self.contains(String(describing:String.documentsDirectory()))
    }
    
    func imageFromPath() -> UIImage? {
        do {
            let pathURL = URL(fileURLWithPath: self)
            let imageData = try Data(contentsOf: pathURL)
            return UIImage(data: imageData)
        } catch {
            print("Error loading image : \(error)")
        }
        
        return nil
    }
}
