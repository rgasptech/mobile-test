//
//  Date+Extension.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 02/06/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit

extension Date {
    
    func stringDate() -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "dd/MM/yyyy"
        return dateFormatter.string(from: self)
    }
}
